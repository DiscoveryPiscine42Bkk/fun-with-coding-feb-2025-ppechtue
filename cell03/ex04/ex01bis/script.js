$(document).ready(function() {
    let size = 200;
    let colors = ["red", "green", "blue"];
    let colorIndex = 0;

    $("#balloon").click(function() {
        if (size < 420) {
            size += 10;
        } else {
            size = 200;
            colorIndex = 0;
        }

        $(this).css({
            "width": size + "px",
            "height": size + "px",
            "background-color": colors[colorIndex]
        });

        colorIndex = (colorIndex + 1) % colors.length;
    });

    $("#balloon").mouseleave(function() {
        if (size > 200) {
            size -= 5;
        }

        colorIndex = (colorIndex - 1 + colors.length) % colors.length;

        $(this).css({
            "width": size + "px",
            "height": size + "px",
            "background-color": colors[colorIndex]
        });
    });
});
