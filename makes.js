// Get the button:
let topb = document.getElementById("top");
let ext = document.getElementById("extra");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topb.style.display = "block";
  } else {
    topb.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function show() {
	ext.style.visibility = "visible";
}

function hide() {
	ext.style.visibility = "hidden";
}