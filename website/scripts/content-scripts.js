$(document).ready(function() {
    $(".quest-horde").prepend($("<img class='quest-icon' src='res/horde-logo.png' alt='horde icon'>"));
    $(".quest-alliance").prepend($("<img class='quest-icon' src='res/alliance-logo.png' alt='alliance icon'>"));

    $(".quest-chain").children(".quest").each(function() {
        $(this).css('margin-left', $(this).index() * 20 + "px");
    });
});