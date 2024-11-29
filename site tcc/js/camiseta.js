let cartCount = 0;

function adicionarAoCarrinho(nome, preco) {
    // Aumenta a contagem de itens no carrinho
    cartCount++;
    
    // Atualiza a contagem do carrinho no HTML
    document.getElementById('cartCount').innerText = cartCount;
    
    // Exibe uma mensagem de confirmação no console
    console.log(`${nome} (R$ ${preco.toFixed(2)}) foi adicionado ao carrinho.`);
}