$(document).ready(function() {
    $("#background-column-middle").width($("#grid-container").width() / 2);
});

$("#grid-container").resize(function() {
    $("#background-column-middle").width($("#grid-container").width() / 2);
});