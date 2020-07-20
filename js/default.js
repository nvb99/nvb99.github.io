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

//Get the button:
mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
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
$(document).ready(function() {
 
	document.querySelector(".advert .btn-close").addEventListener('click', () => {
		document.querySelector('.advert').style.display = 'none';
	})

	$("#owl-demo").owlCarousel({
	  jsonPath : '../uploads/OwlCarousel.json',
	  jsonSuccess : customDataSuccess
	});
   
	function customDataSuccess(data){
	  var content = "";
	  for(var i in data["items"]){
		 
		 var img = data["items"][i].img;
		 var alt = data["items"][i].alt;
		 var link = data["items"][i].link;
		
		 content += "<div class=\"prj-title\" alt=\""
		 + alt + "\" style=\"background: url('"
		 + img + "'); height: 200px; background-size: cover; border-radius: 5px; background-position: center;\"><a href=\"" + link + "\" >"
		 + alt +"</a></div>"
		 
	  }
	  $("#owl-demo").html(content);
	}
   
  });

  $(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		items:2,
		margin:30,
		stagePadding:30,
		smartSpeed:450
	});
  });

  console.log("%c ♥ Hi! Don't do anything in this console! OK? :)))", "color: yellow; background: red; font-size: 35px; padding: 2px 5px");