$(document).ready(function () {
    $(".sidenav").sidenav();

    $("#pagepiling").pagepiling({
        menu: '.menu',
        direction: "vertical",
        verticalCentered: true,
        sectionsColor: ['rgb(189, 204, 237)', '#e5f1ff', '#fff', 'rgb(216, 233, 255)'],
        anchors: ["home", "sobre", "servicos", "fale_comigo"],
        scrollingSpeed: 700,
        easing: "swing",
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            textColor: "#000",
            bulletsColor: "#000",
            position: "right",
            tooltips: ["Home", "Sobre mim", "Serviços", "Fale comigo"],
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: ".section",
        animateAnchor: true,

        //events
        onLeave: function (index, nextIndex, direction) {},
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {},
    });
});
