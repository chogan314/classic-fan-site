var menu = $("#menu-section");
var fixedMenu = $("#fixed-menu-section");

$(window).scroll(function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos >= menu.offset().top) {
        fixedMenu.show();
        menu.css("visibility", "hidden");
    } else {
        fixedMenu.hide();
        menu.css("visibility", "visible");
    }
});

var initialTriangleOverlayPoints = "100,0 100,38 62,0 62,0";
var articleTriangleOverlayPoints = "100,0 100,21.5 45,21.5 45,0";
var newsTriangleOverlayPoints = "100,0 100,21.5 49.5,21.5 49.5,0";
var guideTriangleOverlayPoints = "100,0 100,21.5 48,21.5 48,0";

function getArticleType(typeName) {
    var type = "unknown";

    if (typeName.parent().hasClass("entry-type-article")) {
        type = "article";
    } else if (typeName.parent().hasClass("entry-type-news")) {
        type = "news";
    } else if (typeName.parent().hasClass("entry-type-guide")) {
        type = "guide";
    }

    return type;
}

// handles all active polygon animation listeners
// generates id for each animating polygon 
// and uses that to identify which polygon is being animated by which pal
function polygonAnimationListenerContainer() {
    var self = this;
    this.incrementingID = 0;
    this.idPrefix = "animID";
    this.animationListeners = {};

    this.registerListener = function(pal) {
        var id = pal.polygon.attr("id");
        if (!id) {
            self.incrementingID++;
            id = self.idPrefix + self.incrementingID;
            pal.polygon.attr("id", id);
        }
        if (self.animationListeners[id]) {
            self.animationListeners[id].interrupt();
        }
        self.animationListeners[id] = pal;
    }

    this.removeListener = function(pal) {
        var id = pal.polygon.attr("id");
        self.animationListeners[id] = null;
    }
}

var palContainer = new polygonAnimationListenerContainer();

function animateOverlay(polygon, targetPointsString, initialPointsString, time, onStart, onFinish, onInterrupt) {
    var polygonMesh = new Mesh2(polygon.attr("points"));
    var targetMesh = new Mesh2(targetPointsString);
    var initialMesh = new Mesh2(initialPointsString);

    var polygonAnimationListener = function() {
        var self = this;
        this.polygon = polygon;

        this.start = function(intervalID) {
            self.intervalID = intervalID;
            palContainer.registerListener(self);
            if (self.onStart) {
                self.onStart();
            }
        }

        this.update = function(polygonCoords) {
            self.polygon.attr("points", polygonCoords);
        }

        this.end = function() {
            clearInterval(this.intervalID);
            palContainer.removeListener(self);
        }

        this.finish = function() {
            self.end();
            if (self.onFinish) {
                self.onFinish();
            }
        }

        this.interrupt = function() {
            self.end();
            if (self.onInterrupt) {
                self.onInterrupt();
            }
        }

        this.onStart = onStart;
        this.onFinish = onFinish;
        this.onInterrupt = onInterrupt;
    }

    polygonMesh.morphTo(targetMesh, initialMesh, time, new polygonAnimationListener);
}

$(".entry-image-container").mouseenter(function() {
    var imageOverlay =  $(this).find(".entry-image-overlay");
    var polygon = $(this).find(".entry-image-triangle-overlay").find("polygon");
    var typeName = $(this).find(".entry-type-name");

    var articleType = getArticleType(typeName);
    var overlayPoints = articleTriangleOverlayPoints;

    if (articleType === "news") {
        overlayPoints = newsTriangleOverlayPoints;
    } else if (articleType === "guide") {
        overlayPoints = guideTriangleOverlayPoints;
    }

    imageOverlay.addClass("entry-image-overlay-highlight");
    animateOverlay(polygon, overlayPoints, initialTriangleOverlayPoints, 60, null, () => typeName.show());
});

$(".entry-image-container").mouseleave(function() {
    var imageOverlay =  $(this).find(".entry-image-overlay");
    var polygon = $(this).find(".entry-image-triangle-overlay").find("polygon");
    var typeName = $(this).find(".entry-type-name");

    var articleType = getArticleType(typeName);
    var expandedOverlayPoints = articleTriangleOverlayPoints;

    if (articleType === "news") {
        expandedOverlayPoints = newsTriangleOverlayPoints;
    } else if (articleType === "guide") {
        expandedOverlayPoints = guideTriangleOverlayPoints;
    }

    imageOverlay.removeClass("entry-image-overlay-highlight");
    animateOverlay(polygon, initialTriangleOverlayPoints, expandedOverlayPoints, 40);
    typeName.hide();
});