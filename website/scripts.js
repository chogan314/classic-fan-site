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

$(".entry-image-container").mouseenter(function() {
    var imageOverlay =  $(this).find(".entry-image-overlay");
    var imageTriangleOverlay = $(this).find(".entry-image-triangle-overlay");

    imageOverlay.css("background-color", "rgba(211, 211, 211, 0.2)");
});

$(".entry-image-container").mouseleave(function() {
    var imageOverlay =  $(this).find(".entry-image-overlay");
    var imageTriangleOverlay = $(this).find(".entry-image-triangle-overlay");

    imageOverlay.css("background-color", "");
});