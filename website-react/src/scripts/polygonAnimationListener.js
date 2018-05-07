class PolygonAnimationListener {
    constructor(polygon, polygonAnimationListenerContainer, onStart, onFinish, onInterrupt) {
        this.polygon = polygon;
        this.palContainer = polygonAnimationListenerContainer;
        this.onStart = onStart;
        this.onFinish = onFinish;
        this.onInterrupt = onInterrupt;
    }

    start(intervalID) {
        this.intervalID = intervalID;
        this.palContainer.registerListener(this);
        if (this.onStart) {
            this.onStart();
        }
    }

    update(polygonCoords) {
        this.polygon.setAttribute("points", polygonCoords);
    }

    end() {
        clearInterval(this.intervalID);
        this.palContainer.removeListener(this);
    }

    finish() {
        this.end();
        if (this.onFinish) {
            this.onFinish();
        }
    }

    interrupt() {
        this.end();
        if (this.onInterrupt) {
            this.onInterrupt();
        }
    }
}

class PolygonAnimationListenerContainer {
    constructor() {
        this.incrementingID = 0;
        this.idPrefix = "animID";
        this.animationListeners = {};
    }

    registerListener(polygonAnimationListener) {
        var pal = polygonAnimationListener;
        var id = pal.polygon.getAttribute("id");
        if (!id) {
            this.incrementingID++;
            id = this.idPrefix + this.incrementingID;
            pal.polygon.setAttribute("id", id);
        }
        if (this.animationListeners[id]) {
            this.animationListeners[id].interrupt();
        }
        this.animationListeners[id] = pal;
    }

    removeListener(polygonAnimationListener) {
        var pal = polygonAnimationListener;
        var id = pal.polygon.getAttribute("id");
        this.animationListeners[id] = null;
    }
}

export default PolygonAnimationListener;
export { PolygonAnimationListenerContainer };