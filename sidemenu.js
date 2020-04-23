const sidebar = document.getElementById("sidebar");
const button = document.getElementById("bar");
const image = document.getElementById("image");

button.addEventListener('click', function(e){
    openMenu();
   
});


function openMenu(){
    sidebar.classList.toggle('open');
    
}

function decreaseBrightness(){
    image.style.filter = 'brightness(70%)';
    image.style.transition = '0.5s';
}

function increaseBrightness(){
    image.style.filter = 'brightness(100%)';
    image.style.transition = '0.5s';
}

