// hamburger
$('.hamburger').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('hamburger-active');
    $('header .navbarr').toggleClass('navbarr__active');
});