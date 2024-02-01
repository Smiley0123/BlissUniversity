document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch('header.html')
            .then(response => response.text())
            .then(html => {
                // Create a temporary container
                const tempContainer = document.createElement('div');
                tempContainer.innerHTML = html;

                // Modify the content of the header
                const usernameElement = tempContainer.querySelector('#pg-name');
                if (usernameElement) {
                    usernameElement.textContent = 'John Doe'; // Change to the desired username
                }

                // Append modified HTML to the main container
                document.getElementById('sub-header').innerHTML = tempContainer.innerHTML;
            });

    // Load footer
    fetch('footer.html')
            .then(response => response.text())
            .then(html => document.getElementById('footer-container').innerHTML = html);
            
});


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
