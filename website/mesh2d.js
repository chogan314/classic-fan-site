class Mesh2 {
    constructor(source) {
        this.vertices = [];
        if (Array.isArray(source)) {
            for (var i = 0; i < source.length; i++) {
                this.vertices.push(source[i].cpy());
            }
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

    set(other) {
        if (this.degree() !== other.degree()) {
            throw "cannot set meshes of different degrees";
            return;
        }
        for (var i = 0; i < this.degree(); i++) {
            this.vertices[i] = other.vertices[i].cpy();
        }
    }

    diff(other) {
        if (this.degree() !== other.degree()) {
            throw "cannot diff meshes of different degrees";
            return;
        }
        var diffs = [];
        for (var i = 0; i < this.degree(); i++) {
            diffs.push(other.vertices[i].sub(this.vertices[i]));
        }
        return diffs;
    }

    morphTo(other, duration, listener) {
        if (this.degree() === 0) {
            throw "cannot morph mesh of degree 0";
            return;
        } else if(this.degree() !== other.degree()) {
            throw "cannot morph meshes of different degrees";
            return;
        }

        var diffs = this.diff(other);

        var animationFunction = function(morphingMesh, targetMesh, diffs, duration, startTime, listener) {
            var delta = Date.now() - startTime;
            var tempMesh = morphingMesh.cpy();
            if (delta >= duration) {
                tempMesh.set(targetMesh);
                listener.update(tempMesh.toString());
                listener.finish();
                return;
            }

            var percent = delta / duration;
            for (var i = 0; i < morphingMesh.degree(); i++) {
                tempMesh.vertices[i] = morphingMesh.vertices[i].add(diffs[i].scl(percent));
            }
            listener.update(tempMesh.toString());
        }

        listener.start(setInterval(animationFunction, 6, this, other, diffs, duration, Date.now(), listener));
    }
}