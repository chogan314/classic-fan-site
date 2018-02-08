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

var currentPolygonAnimationListener = null;

function animateOverlay(polygon, targetPointsString, time, onFinish) {
    var polygonMesh = new Mesh2(polygon.attr("points"));
    var targetMesh = new Mesh2(targetPointsString);

    var polygonAnimationListener = {
        self: this,
        polygon: polygon,
        registerIntervalID: function(intervalID) {
            this.intervalID = intervalID;
            if (currentPolygonAnimationListener !== null) {
                console.log ("LKJLKJ");
                currentPolygonAnimationListener.interrupt();
                currentPolygonAnimationListener = self;
            }
            if (this.onStart) {
                this.onStart();
            }
        },
        update: function(polygonCoords) {
            this.polygon.attr("points", polygonCoords);
        },
        finish: function () {
            clearInterval(this.intervalID);
            if (this.onFinish) {
                this.onFinish();
            }
        },
        onFinish: onFinish,
        interrupt: function() {
            clearInterval(this.intervalID);
        }
    };

    polygonMesh.morphTo(targetMesh, time, polygonAnimationListener);
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
    animateOverlay(polygon, overlayPoints, 500, () => typeName.show());
});

$(".entry-image-container").mouseleave(function() {
    var imageOverlay =  $(this).find(".entry-image-overlay");
    var polygon = $(this).find(".entry-image-triangle-overlay").find("polygon");
    var typeName = $(this).find(".entry-type-name");

    imageOverlay.removeClass("entry-image-overlay-highlight");
    animateOverlay(polygon, initialTriangleOverlayPoints, 500);
    typeName.hide();
});