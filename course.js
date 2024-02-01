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

// for course menubar :-

document.querySelector('.op').addEventListener('click',function(e){
    
    e.preventDefault();
    document.querySelector('.list-course').style.display="block";
        
})
document.querySelector('.fields').addEventListener('mouseenter',function(f){
    if(this.classList[0]=="fields")
        document.querySelector('.list-course').style.display="none";
    }
)
