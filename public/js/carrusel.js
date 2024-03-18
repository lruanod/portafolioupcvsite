const carousel = document.querySelector('.carousel');
const carousel2 = document.querySelector('.carousel2');
const prevBtn = document.querySelector('.prev-btn');
const prevBtn2 = document.querySelector('.prev-btn2');
const nextBtn = document.querySelector('.next-btn');
const nextBtn2 = document.querySelector('.next-btn2');
let cardIndex = 0;
let cardIndex2 = 0;

function showCards() {
    const offset = -cardIndex * (carousel.firstElementChild.offsetWidth + 3 );
    carousel.style.transform = `translateX(${offset}px)`;
}

function showCards2() {
    const offset = -cardIndex2 * (carousel2.firstElementChild.offsetWidth + 1);
    carousel2.style.transform = `translateX(${offset}px)`;
}

function showNextSet() {
    cardIndex += 4;
    if (cardIndex > carousel.children.length - 1) {
        cardIndex = 0;
    }
    showCards();
}

function showNextSet2() {
    cardIndex2 += 3;
    if (cardIndex2 > carousel2.children.length - 1) {
        cardIndex2 = 0;
    }
    showCards2();
}

function showPrevSet() {
    cardIndex -= 4;
    if (cardIndex < 0) {
        cardIndex = carousel.children.length - 4;
    }
    showCards();
}
function showPrevSet2() {
    cardIndex2 -= 3;
    if (cardIndex2 < 0) {
        cardIndex2 = carousel2.children.length - 3;
    }
    showCards2();
}

prevBtn.addEventListener('click', showPrevSet);
prevBtn2.addEventListener('click', showPrevSet2);
nextBtn.addEventListener('click', showNextSet);
nextBtn2.addEventListener('click', showNextSet2);

// Mostrar las tarjetas iniciales
showCards();
showCards2();


var files =['1.png', '2.png','imagen-landing-2@2x.png'];
var files2 =['3.png', '4.png','imagen-landing-3@2x.png'];
var files3 =['5.png', '66.png','imagen-landing@2x.png'];
var contador = 0;
var intervalo;


img = document.getElementById('img');
img2 = document.getElementById('img2');
img3 = document.getElementById('img3');

intervalo = setInterval(function(){

    img.style.transition = 'transform 0.5s';
    img2.style.transition = 'transform 0.5s';
    img3.style.transition = 'transform 0.5s';
    img.style.transform = 'translateX(-20%)';
    img2.style.transform = 'translateY(20%)';
    img3.style.transform = 'translateX(20%)';

    setTimeout(() => {
        img.setAttribute('src', 'img/'+files[contador]);
        img2.setAttribute('src', 'img/'+files2[contador]);
        img3.setAttribute('src', 'img/'+files3[contador]);
        setTimeout(() => {
            img.style.transform = 'translateX(0)';
            img2.style.transform = 'translateX(0)';
            img3.style.transform = 'translateX(0)';
        }, 50);
    }, 500);


    contador = contador +1;
    if (contador == files.length) {
        contador = 0;
    }

}, 5000);
