document.getElementById("menu-toggle").addEventListener("click", function() {
    let menu = document.querySelector("nav");

    // Alterna entre abrir e fechar o menu
    if (menu.style.height === "0px" || menu.style.height === "") {
        menu.style.height = menu.scrollHeight + "px"; // Expande o menu para o tamanho necessário
    } else {
        menu.style.height = "0px"; // Fecha o menu
    }
});
