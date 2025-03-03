const swiper = new Swiper('.swiper-container', {
    // Configurações do Swiper
    loop: true, // Loop infinito
    autoplay: {
        delay: 5000, // Troca de slide a cada 5 segundos
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});