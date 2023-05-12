$(document).ready(function () {
    setTimeout(function () {
        $('.hero-title').addClass('show_title');
    }, 0);
    setTimeout(function () {
        $('.hero-title').addClass('show');
        $('.hero-image').addClass('fade-in');
        $('.hero-man').addClass('fade-in');
    }, 1600);
    setTimeout(function () {
        $('.hero-image').removeClass('fade-in');
        $('.hero-image').addClass('floating');
        $('.hero-man').addClass('floating');
        $('.hero-subtitle').addClass('show');
    }, 2400);
    setTimeout(function () {
        $('.logo').addClass('show');
        $('.toggle-menu').addClass('show');
        $('.nav__inner').addClass('show');
    }, 2500);
});
var params = {
    container: document.getElementById('lottiecreativedreams'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'creativedreams.json'
};
var anim;
anim = lottie.loadAnimation(params);
var params = {
    container: document.getElementById('lottiehero'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'hero.json'
};
var anim;
anim = lottie.loadAnimation(params);
var params = {
    container: document.getElementById('lottieman'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'heroman.json'
};
var anim;
anim = lottie.loadAnimation(params);
var params = {
    container: document.getElementById('lottiecreativedreamsdesign'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'creativedreamsdesign.json'
};
var anim;
anim = lottie.loadAnimation(params);
var params = {
    container: document.getElementById('lottiebicycle'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'bicycle.json'
};
var anim;
anim = lottie.loadAnimation(params);
$('.card-tilt').each(function (index, el) {
    VanillaTilt.init(el, {
        max: 15,
        perspective: 900,
        reverse: true,
        speed: 600,
        transition: true,
        scale: 1.05,
        easing: "cubic-bezier(.03,.98,.52,.99)"
    });
});
$(window).scroll(function () {
    var in_view = new Waypoint.Inview({
        element: $('.project-cards')[0],
        enter: function () {
            $('.card').addClass('show');
            $('.title').addClass('show');
            $('.footer-home').addClass('show');
        },
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 600) {
            $(".logo").addClass("sticky_logo");
            $(".toggle-menu").addClass("sticky_btn");
        } else {
            $(".logo").removeClass("sticky_logo");
            $(".toggle-menu").removeClass("sticky_btn");
        }
    });
});

$(function () {
    $(".toggle-menu").click(function () {
        $(this).toggleClass("active");
        $('.nav').toggleClass("nav__open");
        $('.nav__inner').toggleClass("nav__card");
        $('.nav').toggleClass("nav__pos");
        return false;
    });
    $(".menu-item").click(function () {
        $('.nav').toggleClass("nav__open");
        $(".toggle-menu").removeClass("active");
        $('.nav__inner').toggleClass("nav__card");
        $('.nav').toggleClass("nav__pos");
    });
    $(".logo__lottie").hover(function () {
        $(this).addClass("show");
    }, function () {
        $(this).removeClass("show");
    });
});

var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({
    loop: !1
}).add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1600,
    delay: (e, a) => 150 * (a + 1)
});
