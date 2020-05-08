/* ============= PRE-LOADER ============= */
window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-end');
});

let crDate = new Date();
document.querySelector('#crTime').innerHTML = crDate.getHours() + ":" + crDate.getMinutes();
document.querySelector('#crYear').innerHTML = crDate.getFullYear();

/* ============= NAVBAR JS ============= */
const navSlide = () => {
	const mobileBar = document.querySelector(".mobileBar");
	const nav = document.querySelector(".nav-links");

	mobileBar.addEventListener("click", () => {
		// toggle nav
		nav.classList.toggle("nav-active");

		// mobileBar animation
		mobileBar.classList.toggle('toggle');
	});
}
navSlide();
/* ============= BACKGROUND HOVER EFFECT ============= */

let $ = jQuery.noConflict();
jQuery(function($) {
	"use strict";
	// STARS
	$("#star").each(function() {
		postars($('.cover')[0]).init();
	});
});
/* ============= MAIN JS HERE ============= */