const loading = document.getElementById('loading');
const form = document.getElementById('formulario');
const tabela = document.getElementById('tabela');

form.addEventListener('submit', function (evento) {
    // Exibe o efeito de loading
    loading.style.display = 'block';
    setTimeout(() => {
        loading.style.display = 'none';
        // Obtém os dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        const radio = document.querySelector('input[name=radio]:checked').value;
        const selecao = document.getElementById('selecao').value;

        // Adiciona os dados à tabela
        const linha = tabela.insertRow(-1);
        const celula1 = linha.insertCell(0);
        const celula2 = linha.insertCell(1);
        const celula3 = linha.insertCell(2);
        const celula4 = linha.insertCell(3);
        const celula5 = linha.insertCell(4);

        celula1.innerHTML = nome;
        celula2.innerHTML = email;
        celula3.innerHTML = mensagem;
        celula4.innerHTML = radio;
        celula5.innerHTML = selecao;

        // Limpa os campos do formulário e exibe uma mensagem de sucesso
        form.reset();
    }, 1000);

    // Previne o evento submit e o refresh na página
    evento.preventDefault();
});
