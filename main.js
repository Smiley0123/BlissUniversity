// for small screen menubar:-
var navdiv = document.querySelector('.nav-div'); 
function showmenu(){
    navdiv.style.right="0";
    navdiv.style.display = "block";
}
function hidemenu(){
    navdiv.style.right="-150px";
    navdiv.style.display = "none";
    
}

//for sliding text of p tag in header:-

let slideIndex = 0; // Start with the first slide
showSlide();

function showSlide() {
let text = document.getElementsByClassName("sliding");

for (let i = 0; i < text.length; i++) {
    text[i].classList.remove("active");
}// Hide all slides
text[slideIndex].classList.add("active");// Show the current slide


slideIndex = (slideIndex + 1) % text.length;// Increment the slide index or reset to 0 if it exceeds the number of slides

setTimeout(showSlide, 2000);
}


// sliding students reviews:-

let slideIndexr = 1;
showSlides(slideIndexr);

function plusSlides(n) {
  showSlides(slideIndexr += n);
}

function currentSlide(n) {
  showSlides(slideIndexr = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("review-col");
//   let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexr = 1}    
  if (n < 1) {slideIndexr = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndexr-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
}