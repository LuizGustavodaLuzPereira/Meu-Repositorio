/* 1. LÓGICA DAS ABAS (Mudar de página) */

// Seleciona todos os links do menu e todas as seções do site
const links = document.querySelectorAll('nav a');
const secoes = document.querySelectorAll('section');

links.forEach(link => {
    link.addEventListener('click', (evento) => {
        // Impede o link de recarregar a página
        evento.preventDefault();

        // 1. Esconde todas as seções removendo a classe 'ativa'
        secoes.forEach(secao => {
            secao.classList.remove('ativa');
        });

        // 2. Pega o ID da seção que queremos mostrar (ex: #sobre)
        const idDestino = link.getAttribute('href');
        const secaoAlvo = document.querySelector(idDestino);

        // 3. Mostra a seção clicada adicionando a classe 'ativa'
        if (secaoAlvo) {
            secaoAlvo.classList.add('ativa');
        }
    });
});


/* 2. LÓGICA DO BOTÃO (Seu código original) */

const botao = document.getElementById('btnClique');
const resultado = document.getElementById('resultado');

// Verificamos se o botão existe antes de adicionar o evento
if (botao) {
    botao.addEventListener('click', () => {
        resultado.textContent = "🎉 Sucesso! O JavaScript está funcionando e o layout está alinhado!";
        
        // Pequeno efeito extra: muda a cor do texto do resultado
        resultado.style.color = "#10b981";
    });
}