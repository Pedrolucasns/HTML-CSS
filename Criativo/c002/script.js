// Espera até que o DOM seja carregado
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos h2
    const headings = document.querySelectorAll('h2');

    // Adiciona um evento de clique em cada h2
    headings.forEach((heading) => {
        heading.addEventListener('click', () => {
            // Seleciona os parágrafos subsequentes
            let sibling = heading.nextElementSibling;

            // Alterna a classe "visible" nos parágrafos
            while (sibling && sibling.tagName === 'P') {
                sibling.classList.toggle('visible');
                sibling = sibling.nextElementSibling;
            }
        });
    });

    // Oculta os parágrafos inicialmente (sem a classe "visible")
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((paragraph) => {
        paragraph.classList.remove('visible');
    });

    // Mensagem no console
    console.log('Script carregado e funcional!');
});
