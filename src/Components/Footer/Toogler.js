import $ from "jquery/jquery"

$(document).ready(function () {
if ($(window).width() <= 767) {
    $(".footer-links-wrapper").addClass("smallScreen");
} else {
    $(".footer-links-wrapper").removeClass("smallScreen");
    $(".footer-links-wrapper ul").show();
}

$(window).resize(function () {
    // This will execute whenever the window is resized
    // $(window).height(); // New height
    // $(window).width(); // New width

    // console.log($(window).height(), "height")
    // console.log($(window).width(), "width")

    if ($(window).width() <= 767) {
    $(".footer-links-wrapper").addClass("smallScreen");
    } else {
    $(".footer-links-wrapper").removeClass("smallScreen");
    $(".footer-links-wrapper ul").show();
    }
});

  // // slideToggle()

$(document).on("click", ".smallScreen h3", function () {
    $(this).next("ul").slideToggle();
    $(this).toggleClass("minus");
});
});
