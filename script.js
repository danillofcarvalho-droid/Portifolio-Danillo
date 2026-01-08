// Seleciona todos os botões (cabeçalhos) do accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Encontra o item pai (o li que contém o header e o content)
        const item = header.parentElement;

        // Opcional: Fecha os outros itens para deixar apenas um aberto por vez
        // Se quiser que o usuário possa abrir todos, apague esse bloco "forEach" interno
        const allItems = document.querySelectorAll('.accordion-item');
        allItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Adiciona ou remove a classe 'active' no item clicado
        item.classList.toggle('active');
    });
});