// script.js

function adicionarLinha() {
    // Captura os valores dos campos de entrada
    var descricao = document.getElementById('txtdescricao').value;
    var qtdVendasPeriodo = document.getElementById('txtqtdVendasPeriodo').value;
    var periodo = document.getElementById('datePeriodo').value;
    var precoVenda = document.getElementById('numberprecoVenda').value;
    var estimativaMax = document.getElementById('numberestimativaMax').value;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!descricao || !qtdVendasPeriodo || !periodo || !precoVenda) {
        alert('Preencha todos os campos obrigatórios.');
        return;
    }

    // Referência à tabela
    var tabela = document.getElementById('minhaTabela');

    // Cria uma nova linha na tabela
    var novaLinha = tabela.insertRow(-1);

    // Insere células na nova linha
    var celulaDescricao = novaLinha.insertCell(0);
    var celulaPeriodo = novaLinha.insertCell(1);
    var celulaQtd = novaLinha.insertCell(2);
    var celulaPreco = novaLinha.insertCell(3);
    var celulaProjecao = novaLinha.insertCell(4);
    var celulaAcoes = novaLinha.insertCell(5);

    // Preenche as células com os valores capturados e aplica a cor
    celulaDescricao.innerHTML = '<span style="color: #663398;">' + descricao + '</span>';
    celulaPeriodo.innerHTML = '<span style="color: #663398;">' + periodo + '</span>';
    celulaQtd.innerHTML = '<span style="color: #663398;">' + qtdVendasPeriodo + '</span>';
    celulaPreco.innerHTML = '<span style="color: #663398;">R$ ' + precoVenda + '</span>';
    celulaProjecao.innerHTML = '';  // Aqui você pode adicionar a lógica para calcular a projeção
    celulaAcoes.innerHTML = '<img src="asserts/img/Caneta.svg" alt="editar"> <img src="asserts/img/Lixeira.svg" alt="Lixeira" style="cursor:pointer;" onclick="excluirLinha(this)">';
    novaLinha.classList.add('linhaTabela');

    // Cria um objeto com os dados da nova linha
    var novaLinhaData = {
        descricao: descricao,
        periodo: periodo,
        qtdVendasPeriodo: qtdVendasPeriodo,
        precoVenda: precoVenda,
        estimativaMax: estimativaMax
    };

    // Adiciona o objeto à array de dados da tabela no localStorage
    var dadosTabela = JSON.parse(localStorage.getItem('dadosTabela')) || [];
    dadosTabela.push(novaLinhaData);
    localStorage.setItem('dadosTabela', JSON.stringify(dadosTabela));
}

// Função para carregar os dados da tabela do localStorage
function carregarDadosTabela() {
    var dadosTabela = JSON.parse(localStorage.getItem('dadosTabela')) || [];

    // Referência à tabela
    var tabela = document.getElementById('minhaTabela');

    // Itera sobre os dados e adiciona as linhas na tabela visualmente
    for (var i = 0; i < dadosTabela.length; i++) {
        var linhaData = dadosTabela[i];

        // Cria uma nova linha na tabela
        var novaLinha = tabela.insertRow(-1);

        // Insere células na nova linha
        var celulaDescricao = novaLinha.insertCell(0);
        var celulaPeriodo = novaLinha.insertCell(1);
        var celulaQtd = novaLinha.insertCell(2);
        var celulaPreco = novaLinha.insertCell(3);
        var celulaProjecao = novaLinha.insertCell(4);
        var celulaAcoes = novaLinha.insertCell(5);

        // Preenche as células com os valores dos dados
        celulaDescricao.innerHTML = '<span style="color: #663398;">' + linhaData.descricao + '</span>';
        celulaPeriodo.innerHTML = '<span style="color: #663398;">' + linhaData.periodo + '</span>';
        celulaQtd.innerHTML = '<span style="color: #663398;">' + linhaData.qtdVendasPeriodo + '</span>';
        celulaPreco.innerHTML = '<span style="color: #663398;">R$ ' + linhaData.precoVenda + '</span>';
        celulaProjecao.innerHTML = '';  // Adicione a lógica para calcular a projeção aqui, se necessário
        celulaAcoes.innerHTML = '<img src="asserts/img/Caneta.svg" alt="editar"> <img src="asserts/img/Lixeira.svg" alt="Lixeira" style="cursor:pointer;" onclick="excluirLinha(this)">';
        novaLinha.classList.add('linhaTabela');
    }
}

// Chama a função para carregar os dados da tabela ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    carregarDadosTabela();
});

// Função para excluir uma linha da tabela
function excluirLinha(botaoLixeira) {
    // Obtém o índice da linha no DOM
    var indiceLinha = botaoLixeira.closest('tr').rowIndex;

    // Obtém os dados da tabela do localStorage
    var dadosTabela = JSON.parse(localStorage.getItem('dadosTabela')) || [];

    // Remove o objeto correspondente ao índice da linha
    dadosTabela.splice(indiceLinha - 1, 1);

    // Atualiza os dados no localStorage
    localStorage.setItem('dadosTabela', JSON.stringify(dadosTabela));

    // Remove a linha visualmente
    botaoLixeira.closest('tr').remove();
}
