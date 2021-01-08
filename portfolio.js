window.onload = showMobileCarousel

function showMobileCarousel() {
    var carouselMobile = document.getElementById('carouselMobile');
    carouselMobile.style.display = "block";
    var carouselBiologie = document.getElementById('carouselBiologie');
    carouselBiologie.style.display = "none";
}
function showBiologieCarousel() {
    var carouselMobile = document.getElementById('carouselMobile');
    carouselMobile.style.display = "none";
    var carouselBiologie = document.getElementById('carouselBiologie');
    carouselBiologie.style.display = "block";
}