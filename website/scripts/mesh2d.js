// simple 2d mesh class
// immutable

class Mesh2 {
    constructor(source) {
        this.vertices = [];
        // array of Vec2
        if (Array.isArray(source)) {
            for (var i = 0; i < source.length; i++) {
                this.vertices.push(source[i].cpy());
            }
        // string in format "x1,y1 x2,y2 x3,y3..."
        } else {
            var rawVertices = source.split(/[, ]+/);
            for (var i = 0; i < rawVertices.length; i += 2) {
                this.vertices.push(new Vec2(rawVertices[i] + "," + rawVertices[i + 1]));
            }
        }
    }

    toString() {
        var str = "";
        this.vertices.forEach(function(elem) {
            str += elem.toString() + " ";
        });

        if (str.length > 0) {
            str = str.substr(0, str.length - 1);
        }

        return str;
    }

    degree() {
        return this.vertices.length;
    }

    cpy() {
        return new Mesh2(this.vertices);
    }

    equals(other) {
        if (this.degree() !== other.degree()) {
            return false;
        }
        for(var i = 0; i < this.vertices.length; i++) {
            if (!this.vertices[i].equals(other.vertices[i])) {
                return false;
            }
        }
        return true;
    }

    add(other) {
        if (this.degree() !== other.degree()) {
            throw "cannot add meshes of different degrees";
            return;
        }
        var vertices = []
        for (var i = 0; i < this.degree(); i++) {
            vertices.push(this.vertices[i].add(other.vertices[i]));
        }
        return new Mesh2(vertices);
    }

    sub(other) {
        if (this.degree() !== other.degree()) {
            throw "cannot subtract meshes of different degrees";
            return;
        }
        var vertices = []
        for (var i = 0; i < this.degree(); i++) {
            vertices.push(this.vertices[i].sub(other.vertices[i]));
        }
        return new Mesh2(vertices);
    }

    // move vertices towards location of target mesh vertices over some duration
    // initialMesh: theoretical mesh with max diff from target mesh
    // duration: time animation should take if starting from initial mesh
    // listener: handler for animation events
    morphTo(target, initialMesh, duration, listener) {
        if (this.degree() === 0) {
            throw "cannot morph mesh of degree 0";
            return;
        } else if(this.degree() !== target.degree()) {
            throw "cannot morph meshes of different degrees";
            return;
        }

        // scale duration based on diff from initial mesh
        var diff = target.sub(this);
        var maxDiff = target.sub(initialMesh);
        
        var timeScaleFactor = 1;
        for (var i = 0; i < diff.degree(); i++) {
            var diffLen = diff.vertices[i].len();
            var maxDiffLen = maxDiff.vertices[i].len();
            if (maxDiffLen !== 0 && diffLen !== maxDiffLen) {
                timeScaleFactor = diffLen / maxDiffLen;
                break;
            }
        }

        duration = duration * Math.min(1, Math.max(0, timeScaleFactor));

        var animationFunction = function(morphingMesh, targetMesh, diff, duration, startTime, listener) {
            var delta = Date.now() - startTime;
            var tempMesh = morphingMesh.cpy();
            if (delta >= duration) {
                tempMesh = targetMesh.cpy();
                listener.update(tempMesh.toString());
                listener.finish();
                return;
            }

            var percent = delta / duration;
            for (var i = 0; i < morphingMesh.degree(); i++) {
                tempMesh.vertices[i] = morphingMesh.vertices[i].add(diff.vertices[i].scl(percent));
            }
            listener.update(tempMesh.toString());
        }

        listener.start(setInterval(animationFunction, 6, this, target, diff, duration, Date.now(), listener));
    }
}