var swiper2 = new Swiper(".product-swiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".hero-swiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// active class in navigation
const navElements = document.querySelectorAll(".nav-item");
navElements.forEach((element) => {
    element.addEventListener('click', function () {
        navElements.forEach(el => el.classList.remove('text-primary'));
        this.classList.add('text-primary');
    })
})