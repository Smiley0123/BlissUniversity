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
 //sliding campus image
 let currentIndex = 0; // Start with the first slide
 showcamimag();
 
 function showcamimag() {
 let campusimg = document.getElementsByClassName("cam-img");
 
 for (let i = 0; i < campusimg.length; i++) {
     campusimg[i].classList.remove("active");
 }// Hide all slides
 campusimg[currentIndex].classList.add("active");// Show the current slide
 
 
 currentIndex = (currentIndex + 1) % campusimg.length;// Increment the slide index or reset to 0 if it exceeds the number of slides
 
 setTimeout(showcamimag, 3000);
 }
 
 