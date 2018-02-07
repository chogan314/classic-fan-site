class Vec2 {
    constructor(x, y) {
        if (x === undefined) {
            this.x = 0;
            this.y = 0;
        } else {
            this.x = x;
            this.y = y;
        }
    }

    cpy() {
        return new Vec2(this.x, this.y);
    }

    len() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    norm() {
        return new Vec2(this.x / this.len(), this.y / this.len());
    }

    dist(a, b) {
        if (b === undefined) {
            return Math.sqrt(Math.pow(b.x - this.x, 2) + Math.pow(b.y - this.y, 2));
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
}