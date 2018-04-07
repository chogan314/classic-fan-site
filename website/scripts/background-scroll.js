$(window).scroll(function() {
    var scrollPos = $(document).scrollTop();
    $(".site-container-overlay").css("top", scrollPos / 2);
});