$(document).ready(function() {
    $("#changeColorBtn").click(function() {
        $("body").css("background-color", `hsl(${Math.random() * 360}, 100%, 75%)`);
    });
});
