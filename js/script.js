"use strict";

//  ------ Burger Menu -------
var toggleIcon = document.getElementById("toggle");
var menu = document.getElementById("menu"); // let menuLink = document.querySelectorAll('.main-nav__link');

toggleIcon.addEventListener("click", function () {
  toggleIcon.classList.toggle("open");
  menu.classList.toggle("opened");

  if (toggleIcon.classList.contains("open")) {
    document.body.classList.add('no-scroll');
    document.querySelectorAll('.main-nav__link').forEach(function (item) {
      item.addEventListener('click', function (event) {
        toggleIcon.classList.remove('open');
        menu.classList.remove('opened');
        document.body.classList.remove('no-scroll');
      });
    });
  } else {
    document.body.classList.remove('no-scroll');
  }
});