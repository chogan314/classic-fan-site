var menu = $("#menu-section");
var fixedMenu = $("#fixed-menu-section");

var mainScreenScrollPos = 0;
var mobileMenuScrollPos = 0;

function showFixedMenu() {
    var scrollPos = $(document).scrollTop();
    
    if ($(window).width() > 1560) {
        var margin = parseInt($("#wide-header-scrolling-section").css("margin-top"));
        margin += scrollPos - $("#wide-header-scrolling-section").offset().top;
        margin = Math.max(margin, 0);
        $("#wide-header-scrolling-section").css("margin-top", margin + "px");
        return;
    }

    if (scrollPos >= menu.offset().top) {
        fixedMenu.show();
        menu.css("visibility", "hidden");
    } else {
        fixedMenu.hide();
        menu.css("visibility", "visible");
    }
}

$(window).scroll(function() {
    showFixedMenu()
});

$(".menu-hamburger-icon").click(function() {
    mainScreenScrollPos = $(document).scrollTop();
    if (mainScreenScrollPos < menu.offset().top) {
        if (mobileMenuScrollPos <= menu.offset().top) {
            mobileMenuScrollPos = mainScreenScrollPos;
        }
    } else {
        if (mobileMenuScrollPos < menu.offset().top) {
            mobileMenuScrollPos = menu.offset().top;
        }
    }
    $("#grid-section").toggle();
    $("#mobile-menu-section").toggle();
    $(".menu-close-icon").toggle();
    $(".menu-hamburger-icon").toggle();
    $(document).scrollTop(mobileMenuScrollPos);
    if ($(document).scrollTop() === 0) {
        if (mainScreenScrollPos >= menu.offset().top) {
            $("#title-section").hide();            
        }
    }
    showFixedMenu();
});

$(".menu-close-icon").click(function() {
    mobileMenuScrollPos = $(document).scrollTop();
    if (mobileMenuScrollPos < menu.offset().top) {
        if (mainScreenScrollPos <= menu.offset().top) {
            mainScreenScrollPos = mobileMenuScrollPos;
        }
    } else {
        if (mainScreenScrollPos < menu.offset().top) {
            mainScreenScrollPos = menu.offset().top;
        }
    }
    $("#title-section").show();    
    $("#grid-section").toggle();
    $("#mobile-menu-section").toggle();
    $(".menu-hamburger-icon").toggle();    
    $(".menu-close-icon").toggle();   
    $(document).scrollTop(mainScreenScrollPos);
    showFixedMenu();    
});