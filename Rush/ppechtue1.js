$(document).ready(function () {
    $("#navbar-placeholder").load("navbar.html", function(response, status, xhr) {
        if (status == "error") {
            console.error("Error loading navbar: " + xhr.status + " " + xhr.statusText);
        } else {
            console.log("Navbar loaded successfully");
        }
    });

    // Smooth Scroll
    $("body").on("click", "nav ul li a", function (e) {
        let target = $(this).attr("href");
        if (target.startsWith("#") && $(target).length) {
            e.preventDefault();
            $("html, body").animate(
                { scrollTop: $(target).offset().top - 50 },
                800
            );
        }
    });

    // เปลี่ยนสี Navbar เมื่อลงมา Scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("navbar-dark bg-dark");
        } else {
            $(".navbar").removeClass("navbar-dark bg-dark");
        }
    });
});
