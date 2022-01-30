// All Variables
const bodyTag = document.querySelector("body");
const headerTag = document.querySelector("header");
const btnMenu = document.getElementById("toggleMenu");
const modelOpen = document.getElementById("signIn");
const modelClose = document.getElementById("signinClose");
const scrollTopBtn = document.getElementById("scrollTop");
const menuSigninBtn = document.getElementById("menuSignin");


// Menu Bar Click Active Navigation
btnMenu.addEventListener('click', function () {
    headerTag.classList.toggle('menuActive');
});


// Navigation Menu Open OR Close
btnMenu.addEventListener('click', function () {
    bodyTag.classList.toggle('navigation');
});


// ESC keyPress and remove The Navigation or menuActive
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        bodyTag.classList.remove('navigation');
        headerTag.classList.remove('menuActive');
        bodyTag.classList.remove('Open');
    }
});


// Sign In Form Open
modelOpen.addEventListener('click', function () {
    bodyTag.classList.add('Open');
});

menuSigninBtn.addEventListener('click', function(){
    bodyTag.classList.add('Open');
});


// Sign In Form Close
modelClose.addEventListener('click', function () {
    bodyTag.classList.remove('Open');
});



// Navigation Menu Button click
$('#MenuBTN a').on('click', function () {
    $('body').removeClass('navigation');
    $('header').removeClass('menuActive');
});


// Scroll Events
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        bodyTag.classList.add("ScrollingTop");

        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            scrollTopBtn.style.visibility = "visible";
        }
        else {
            scrollTopBtn.style.visibility = "hidden";
        }
    }
    else {
        bodyTag.classList.remove("ScrollingTop");
    }
});



// Scroll Top Button
scrollTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});