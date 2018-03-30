$(".entry-image-container").mouseenter(function() {
    var imageOverlay =  $(this).find(".entry-image-overlay");
    imageOverlay.addClass("entry-image-overlay-highlight");
});

$(".entry-image-container").mouseleave(function() {
    var imageOverlay =  $(this).find(".entry-image-overlay");
    imageOverlay.removeClass("entry-image-overlay-highlight");
});