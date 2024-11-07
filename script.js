let cart = [];

// Função para abrir as abas
function openTab(evt, tabName) {
    // Esconde todas as abas
    const tabcontents = document.querySelectorAll('.tabcontent');
    tabcontents.forEach(content => {
        content.style.display = 'none';
    });

    // Remove a classe "active" das abas
    const tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach(link => {
        link.classList.remove('active');
    });

    // Exibe a aba selecionada
    document.getElementById(tabName).style.display = 'block';
    if (evt) evt.currentTarget.classList.add('active');
}

// Função para adicionar ao carrinho
function addToCart(gameTitle, gamePrice) {
    cart.push({ title: gameTitle, price: gamePrice });
    updateCart();
}

// Função para atualizar o carrinho
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Limpa a lista de itens
    cartItems.innerHTML = '';
    let total = 0;

    // Exibe os itens do carrinho
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.title} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    // Atualiza o total
    totalPriceElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Adiciona eventos aos botões de "Adicionar ao Carrinho"
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const gameTitle = button.getAttribute('data-title');
            const gamePrice = parseFloat(button.getAttribute('data-price'));
            addToCart(gameTitle, gamePrice);
        });
    });

    // Abre a aba inicial
    openTab(null, 'home');
});
