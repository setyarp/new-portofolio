// Sticky Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 0);
});

// Hamburger Menu
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Show Menu
menu.onclick = () => {
	navlist.classList.toggle('active');
};

// Hide Menu When Scrolling
window.onscroll = () => {
	navlist.classList.remove('active');
};