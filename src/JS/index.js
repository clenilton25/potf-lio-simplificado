// Objetivo 1 - quando o usuario clicar no botao de mostrar mais 
//deve abrir os projetos que estao escondido no html. 

//passo 1 - pegar o botao mostrar mais no js para poder verificar 
//quando o usuario clicar em cima dele 

const botaomostrarprojetos = document.querySelector('.btn-mostrar-projetos');
const projetosinativos = document.querySelectorAll('.projeto:not(.ativo)');

console.log(projetosinativos);

botaomostrarprojetos.addEventListener('click', () => {
//adicionar a classe 'ativo' nos projetos escondidos
    maisprojetos();

    //Objetivo 2 - esconder o botao de mostrar mais 
    //passo 1 
    esconderbotao();
} );

function esconderbotao() {
    botaomostrarprojetos.classList.add('remover');
}

function maisprojetos() {
    projetosinativos.forEach(projetoinativo => {
        projetoinativo.classList.add('ativo');
    });
}
