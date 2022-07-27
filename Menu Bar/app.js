const menuBarMobile = document.querySelector('.nav-menu-mobile');
const menuBar = document.querySelector('.nav-menu');
const menuToggle = document.querySelector('.nav-toggle');
const menuToggleLine = document.querySelector('.line');

menuToggle.addEventListener('click', function(){
    menuToggle.classList.toggle('active');
    menuBar.classList.toggle('active-menu');
});


