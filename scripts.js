var header = document.getElementsByTagName("nav")[0];
header.style.transition = "all 0.5s ease";

window.addEventListener('scroll', function(){
    if(window.scrollY > 100) {
        this.header.style.background = "#000";
    } else {
        this.header.style.background = "rgba(0,0,0,0)";
    }
})

var contact = document.querySelector(".backContact");
var contactButton = document.querySelector('.contact');
var contactButton2 = document.querySelector('.bc2');
var closeB = document.querySelector('.closeB');
var closeB2 = document.querySelector('.closeB2');

contactButton.addEventListener('click', function(){
    contact.style.display = 'flex';
    closeB.style.display = 'flex';
});

contactButton2.addEventListener('click', function(){
    contact.style.display = 'flex';
    closeB.style.display = 'flex';
});

closeB.addEventListener('click', function(){
    contact.style.display = 'none';
    closeB.style.display = 'none';
});

closeB2.addEventListener('click', function(){
    contact.style.display = 'none';
    closeB.style.display = 'none';
});


//PARTE DE COPIAR
let wasop = '3113026307';
let yimail = 'fecaflo18@gmail.com';

var buttonW = document.querySelector('#whats');

buttonW.addEventListener('click', function(){
    navigator.clipboard.writeText(wasop).then(function(){
        alert('Número copiado en portapales');
    });
});

//BARRAS DE HABILIDADES
// const bars = document.querySelectorAll('.bar');

// bars.forEach(bar => {
//     let percent = bar.innerHTML;
//     let percentValue = parseFloat(percent.replace('%',''));
//     let otherPercent = 100 - percentValue;

//     bar.style.background = `linear-gradient(to right, #1c3a26 ${percentValue}%, #464646 ${otherPercent}%)`;
// });

//MENU HAMBURGUESA
let buttomBurguer = document.querySelector('.burguer');
let burguerMenu = document.querySelector('.burguer-menu');
let visible = false;

buttomBurguer.addEventListener('click', function(){
    if(!visible) {
        visible = true;
        burguerMenu.style.display = 'flex';
    } else {
        visible = false;
        burguerMenu.style.display = 'none';
    }
});

window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth;
  
    if (screenWidth > 920) {
      burguerMenu.style.display = "none";
      visible = false;
    }
});
