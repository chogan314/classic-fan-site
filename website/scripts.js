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

function polygonAnimationListenerContainer() {
    var slf = this;
    this.incrementingID = 0;
    this.idPrefix = "animID";
    this.animationListeners = {};

    this.registerListener = function(pal) {
        var id = pal.polygon.attr("id");
        if (!id) {
            slf.incrementingID++;
            id = slf.idPrefix + slf.incrementingID;
            pal.polygon.attr("id", id);
        }
        if (slf.animationListeners[id]) {
            slf.animationListeners[id].interrupt();
        }
        slf.animationListeners[id] = pal;
    }

    this.removeListener = function(pal) {
        var id = pal.polygon.attr("id");
        slf.animationListeners[id] = null;
    }
}

var palContainer = new polygonAnimationListenerContainer();

function animateOverlay(polygon, targetPointsString, time, onStart, onFinish, onInterrupt) {
    var polygonMesh = new Mesh2(polygon.attr("points"));
    var targetMesh = new Mesh2(targetPointsString);

    var polygonAnimationListener = function() {
        var slf = this;
        this.polygon = polygon;

        this.start = function(intervalID) {
            slf.intervalID = intervalID;
            palContainer.registerListener(slf);
            if (slf.onStart) {
                slf.onStart();
            }
        }

        this.update = function(polygonCoords) {
            slf.polygon.attr("points", polygonCoords);
        }

        this.end = function() {
            clearInterval(this.intervalID);
            palContainer.removeListener(slf);
        }

        this.finish = function() {
            slf.end();
            if (slf.onFinish) {
                slf.onFinish();
            }
        }

        this.interrupt = function() {
            slf.end();
            if (slf.onInterrupt) {
                slf.onInterrupt();
            }
        }

        this.onStart = onStart;
        this.onFinish = onFinish;
        this.onInterrupt = onInterrupt;
    }

    polygonMesh.morphTo(targetMesh, time, new polygonAnimationListener);
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
    animateOverlay(polygon, overlayPoints, 500, null, () => typeName.show());
});

$(".entry-image-container").mouseleave(function() {
    var imageOverlay =  $(this).find(".entry-image-overlay");
    var polygon = $(this).find(".entry-image-triangle-overlay").find("polygon");
    var typeName = $(this).find(".entry-type-name");

    imageOverlay.removeClass("entry-image-overlay-highlight");
    animateOverlay(polygon, initialTriangleOverlayPoints, 500);
    typeName.hide();
});