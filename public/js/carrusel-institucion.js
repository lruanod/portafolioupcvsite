const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let cardIndex = 0;

function showCards() {
    const offset = -cardIndex * (carousel.firstElementChild.offsetWidth + 3 );
    carousel.style.transform = `translateX(${offset}px)`;
}


function showNextSet() {
    cardIndex += 3;
    if (cardIndex > carousel.children.length - 1) {
        cardIndex = 0;
    }
    showCards();
}



function showPrevSet() {
    cardIndex -= 3;
    if (cardIndex < 0) {
        cardIndex = carousel.children.length - 3;
    }
    showCards();
}


prevBtn.addEventListener('click', showPrevSet);
nextBtn.addEventListener('click', showNextSet);

// Mostrar las tarjetas iniciales
showCards();
