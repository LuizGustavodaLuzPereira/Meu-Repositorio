// script.js

// Espera o carregamento completo do conteúdo da página
document.addEventListener('DOMContentLoaded', function () {
    // Referencia o botão pelo ID
    const btnClique = document.getElementById('btnClique');
    
    // Referencia o elemento onde o resultado será exibido
    const resultado = document.getElementById('resultado');
    
    // Adiciona um evento de clique no botão
    btnClique.addEventListener('click', function () {
        // Exibe uma mensagem quando o botão for clicado
        resultado.textContent = 'Você clicou no botão! Bem-vindo ao site!';
    });
});