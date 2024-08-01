let slideIndex = 1;
showSlide(slideIndex);

// Muda o slide automaticamente a cada 15 segundos
const autoSlideInterval = 15000; // 15 segundos
let slideInterval = setInterval(() => {
    moveSlide(1);
}, autoSlideInterval);

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("carousel-slide");
    const indicators = document.getElementsByClassName("indicator");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].className += " active";
}
