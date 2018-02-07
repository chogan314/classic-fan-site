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

var initialTriangleOverlayPoints = "100,0 100,16 83,0 83,0";
var articleTriangleOverlayPoints = "100,0 100,9.5 76,9.5 76,0";
var newsTriangleOverlayPoints = "100,0 100,9.5 76,9.5 76,0";
var guideTriangleOverlayPoints = "100,0 100,9.5 76,9.5 76,0";

$(".entry-image-container").mouseenter(function() {
    var imageOverlay =  $(this).find(".entry-image-overlay");
    var polygon = $(this).find(".entry-image-triangle-overlay").find("polygon");
    var typeName = $(this).find(".entry-type-name");

    imageOverlay.css("background-color", "rgba(211, 211, 211, 0.2)");
    polygon.attr("points", articleTriangleOverlayPoints);
    typeName.show();
});

$(".entry-image-container").mouseleave(function() {
    var imageOverlay =  $(this).find(".entry-image-overlay");
    var polygon = $(this).find(".entry-image-triangle-overlay").find("polygon");
    var typeName = $(this).find(".entry-type-name");

    imageOverlay.css("background-color", "");
    polygon.attr("points", initialTriangleOverlayPoints);
    typeName.hide();
});