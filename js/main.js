$(document).ready(function () {
    new WOW().init();
    $(".content-info h1").fitText(3, {
        minFontSize: '12px',
        maxFontSize: '40px'
    });
    $(".content-info p").fitText(3, {
        minFontSize: '11px',
        maxFontSize: '20px'
    });
    $(".sec1 h2").fitText(2, {
        minFontSize: '20px',
        maxFontSize: '50px'
    });
    $(".rightSide h3").fitText(2, {
        minFontSize: '12',
        maxFontSize: '25px'
    });
    $(".rightSide p").fitText(2, {
        minFontSize: '14px',
        maxFontSize: '17px'
    });
    $(".leftside h3").fitText(2, {
        minFontSize: '10',
        maxFontSize: '25px'
    });
    $(".leftside p").fitText(2, {
        minFontSize: '14px',
        maxFontSize: '17px'
    });
    $(".sec2 h2").fitText(2, {
        minFontSize: '25px',
        maxFontSize: '50px'
    });
    $(".sec2 p").fitText(2, {
        minFontSize: '19px',
        maxFontSize: '25px'
    });
});