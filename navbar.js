$(window).scroll(function (scroll) {
    $('.nav-pc').toggleClass('fixed-top', $(this).scrollTop() > 750);
});
$(window).scroll(function (scroll) {
    $('.nav-pc').toggleClass('bg-nav', $(this).scrollTop() > 750);
});
$(window).scroll(function (scroll) {
    $('.container-nav').toggleClass('container', $(this).scrollTop() > 750);
});