var burger = document.querySelector(".burger");
var navbar = document.querySelector(".nav-bar");
var navList = document.querySelector(".nav-list");
var rightNav = document.querySelector(".rightNav");
var watch = document.querySelector("#watch");

burger.addEventListener("click", function () {
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})

watch.addEventListener("click", function () {
    '<a href="https://www.youtube.com/watch?v=ShuyiHHOpvo">';
})