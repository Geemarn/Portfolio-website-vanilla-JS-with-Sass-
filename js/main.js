
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBrand = document.querySelector(".menu-brand");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");


menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	
	menuBtn.classList.toggle("close");
	menu.classList.toggle("open");
	menuBrand.classList.toggle("open");
	menuNav.classList.toggle("open");
	navItems.forEach(navItem => navItem.classList.toggle("open"));
}