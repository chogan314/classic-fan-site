class Vec2 {
    // typescript save me
    constructor(x, y) {
        if (x === undefined) {
            this.x = 0;
            this.y = 0;
        } else if (typeof(x) === "string") {
            var coords = [];
            x.split(",").forEach(function(elem) {
                coords.push(parseFloat(elem.trim()));
            });
            this.x = coords[0];
            this.y = coords[1];
        } else {
            this.x = x;
            this.y = y;
        }
    }

    toString() {
        return "" + this.x + "," + this.y;
    }

    equals(other) {
        return this.x === other.x && this.y === other.y;
    }

    cpy() {
        return new Vec2(this.x, this.y);
    }

    len() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    norm() {
        if (this.len() === 0) {
            return new Vec2();
        }
        return new Vec2(this.x / this.len(), this.y / this.len());
    }

    dist(a, b) {
        if (b === undefined) {
            return Math.sqrt(Math.pow(a.x - this.x, 2) + Math.pow(a.y - this.y, 2));
        } else {
            return Math.sqrt(Math.pow(a - this.x, 2) + Math.pow(b - this.y, 2));
        }
    }

    add(a, b) {
        if (b === undefined) {
            return new Vec2(this.x + a.x, this.y + a.y);
        } else {
            return new Vec2(this.x + a, this.y + b);
        }
    }

    sub(a, b) {
        if (b === undefined) {
            return new Vec2(this.x - a.x, this.y - a.y);
        } else {
            return new Vec2(this.x - a, this.y - b);
        }
    }

    scl(val) {
        return new Vec2(this.x * val, this.y * val);
    }

    directionTo(other) {
        return other.sub(this).norm();
    }
}