

$(document).ready(function() {
    $('#trigger').click(function() {
       $('#overlay').fadeIn(300);
    });
 
    $('#close').click(function() {
       $('#overlay').fadeOut(300);
    });
 });
 //display popup for the second portfolio project
 $('#trigger2').click(function() {
    $('#overlay2').fadeIn(300);
 });
 
 $('#close2').click(function() {
    $('#overlay2').fadeOut(300);
 });
 //display popup for the third portfolio project
 $('#trigger3').click(function() {
    $('#overlay3').fadeIn(300);
 });
 
 $('#close3').click(function() {
    $('#overlay3').fadeOut(300);
 });
 
 //display popup for the fourth portfolio project
 $('#trigger4').click(function() {
    $('#overlay4').fadeIn(300);
 });
 
 $('#close4').click(function() {
    $('#overlay4').fadeOut(300);
 });
 
 //display popup for the fifth portfolio project
 $('#trigger5').click(function() {
    $('#overlay5').fadeIn(300);
 });
 
 $('#close5').click(function() {
    $('#overlay5').fadeOut(300);
 });
 
//When you click home button, it will take you to the welcome section of the webpage
$('.home-button').click(function () {
    $('html, body').animate({
        scrollTop: ($('body').offset().top)
    }, 500);
});

//When you click about button, it will take you to the about section of the webpage
$('.about-button').click(function () {
    $('html, body').animate({
        scrollTop: ($('.about').offset().top)
    }, 500);
});

//When you click portfolio button, it will take you to the portfolio section of the webpage
$('.portfolio-button').click(function () {
    $('html, body').animate({
        scrollTop: ($('.portfolio').offset().top)
    }, 500);
});

//When you click contact button, it will take you to the contact section of the webpage
$('.contact-button').click(function () {
    $('html, body').animate({
        scrollTop: ($('.contact-title').offset().top)
    }, 500);
});
