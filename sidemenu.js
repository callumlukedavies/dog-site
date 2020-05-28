const sidebar = document.getElementById("sidebar");
const button = document.getElementById("bar");
const image = document.getElementById("image");
const box = document.getElementById("box1");

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

function flipCard(input, input2){
    const frontcard = document.getElementById(input);
    const backcard = document.getElementById(input2);
    frontcard.style.visibility = 'hidden';
    backcard.style.opacity = '1';
    backcard.style.visibility = 'visible';
}

function reverseCard(input, input2){
    const frontcard = document.getElementById(input);
    const backcard = document.getElementById(input2);
    frontcard.style.visibility = 'visible';
    backcard.style.visibility = 'hidden';
    backcard.style.opacity = '0';
}