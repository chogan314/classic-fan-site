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

function animateOverlay(polygon, destPointsString, time) {
    function parsePoints(pointsListString) {
        var rawPoints = pointsListString.split(/[, ]+/);
        var pointsList = [];
        for (var i = 0; i < rawPoints.length; i += 2) {
            pointsList.push({
                x: parseInt(rawPoints[i]),
                y: parseInt(rawPoints[i + 1])
            });
        }
        return pointsList;
    }

    function pointsToString(pointsList) {
        var pointsString = "";
        for (var i = 0; i < pointsList.length; i++) {
            pointsString += pointsList[i].x;
            pointsString += ",";
            pointsString += pointsList[i].y;
            pointsString += " ";
        }
        return pointsString;
    }

    // takes an (x,y) coord for source and an (x,y) coord for destination, time in milliseconds
    function calcStep(source, destination, time) {
        xDiff = destination.x - source.x;
        yDiff = destination.y - source.y;
        var step = {
            xStep: Math.min(xDiff, xDiff / time),
            yStep: Math.min(yDiff, yDiff / time)
        }
        return step;
    }

    function areEqual(a, b) {
        return a.x === b.x && a.y === b.y;
    }

    function listsAreEqual(a, b) {
        for (var i = 0; i < a.length; i++) {
            if (!areEqual(a[i], b[i])) {
                return false;
            }
        }

        return true;
    }

    function dist(a, b) {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
    }

    function normalize(vector) {
        var len = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
        return {
            x: vector.x / len,
            y: vector.y / len
        };
    }

    var polygonPoints = parsePoints(polygon.attr("points"));
    var destPoints = parsePoints(destPointsString);

    var steps = [];
    for (var i = 0; i < polygonPoints.length; i++) {
        steps.push(calcStep(polygonPoints[i], destPoints[i], time));
    }

    var currentTime = Date.now();
    while (!listsAreEqual(polygonPoints, destPoints)) {
        var newTime = Date.now();
        var delta = newTime - currentTime;
        currentTime = newTime;

        for (var i = 0; i < polygonPoints.length; i++) {
            if (dist(polygonPoints[i], destPoints[i]) <= steps[i]) {
                polygonPoints[i] = destPoints[i];
            } else {
                polygonPoints[i].x += normalize(steps[i]).x * delta;
                polygonPoints[i].y += normalize(steps[i]).y * delta;
            }
        }
        polygon.attr("points", pointsToString(polygonPoints));
    }
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
    // polygon.attr("points", overlayPoints);
    animateOverlay(polygon, overlayPoints, 500);
    typeName.show();
});

$(".entry-image-container").mouseleave(function() {
    var imageOverlay =  $(this).find(".entry-image-overlay");
    var polygon = $(this).find(".entry-image-triangle-overlay").find("polygon");
    var typeName = $(this).find(".entry-type-name");

    imageOverlay.removeClass("entry-image-overlay-highlight");
    polygon.attr("points", initialTriangleOverlayPoints);
    typeName.hide();
});