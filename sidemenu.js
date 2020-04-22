const sidebar = document.getElementById("sidebar");
const button = document.getElementById("bar");

button.addEventListener('click', function(e){
    openMenu();
   
});


function openMenu(){
    sidebar.classList.toggle('open');
    
}


