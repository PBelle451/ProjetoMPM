// Adicione isso ao final do seu arquivo mainAJ.js

function ajustarDados() {
    const primeiroMes = document.getElementById('txtprimeiroMes').value;
    const nMeses = document.getElementById('numbernMeses').value;

    const dadosEstimativaVendas = obterDadosEstimativaVendas();
    const popupContent = `
        <h2>Ajuste de Sazonalidade</h2>
        <p>Insira a sazonalidade para cada mês com base na estimativa de vendas.</p>
        <div class="scrollable-popup">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Mês</th>
                        <th>Meta de Faturamento</th>
                        <th>% da Meta Mensal</th>
                    </tr>
                </thead>
                <tbody>
                    ${gerarLinhasTabela(dadosEstimativaVendas, primeiroMes, nMeses)}
                </tbody>
            </table>
        </div>
        <button type="button" class="btn btn-primary" onclick="salvarSazonalidade()">Salvar</button>
    `;

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = popupContent;

    document.body.appendChild(popup);
}

function gerarLinhasTabela(dadosEstimativaVendas, primeiroMes, nMeses) {
    let linhas = '';
    dadosEstimativaVendas.forEach((dados, index) => {
        linhas += `
            <tr>
                <td>${primeiroMes}/${Number(nMeses) + index}</td>
                
                <td><input type="text" class="form-control" id="percentualMeta${index}" placeholder="%"></td>
                <td>${dados.metaFaturamento}</td>
            </tr>
        `;
    });
    return linhas;
}

function obterDadosEstimativaVendas() {
    // Modificado para obter a meta de faturamento do campo de entrada
    const metaFaturamento = document.getElementById('txtmetaFaturamento').value;
    return [
        { metaFaturamento: metaFaturamento },
        // Adicione mais dados conforme necessário
    ];
}

function salvarSazonalidade() {
    const percentuais = document.querySelectorAll('[id^="percentualMeta"]');
    const dadosSazonalidade = Array.from(percentuais).map((input, index) => ({
        mes: `${document.getElementById('txtprimeiroMes').value}/${Number(document.getElementById('numbernMeses').value) + index}`,
        percentualMeta: input.value,
    }));

    alert('Valores inseridos:\n\n' + JSON.stringify(dadosSazonalidade, null, 2));

    fecharPopup();
}

function fecharPopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        document.body.removeChild(popup);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    carregarDadosTabelaEstimativaVendas();
});

function carregarDadosTabelaEstimativaVendas() {
    const dadosTabela = JSON.parse(localStorage.getItem('dadosTabela')) || [];
    const tabelaSazonalidade = document.getElementById('tabelaSazonalidade');

    // Limpa a tabela antes de carregar os dados
    tabelaSazonalidade.innerHTML = '';

    dadosTabela.forEach(dados => {
        const novaLinha = tabelaSazonalidade.insertRow(-1);

        const celulaMes = novaLinha.insertCell(0);
        const celulaDescricao = novaLinha.insertCell(1);
        const celulaPeriodo = novaLinha.insertCell(2);
        const celulaQtd = novaLinha.insertCell(3);
        const celulaPreco = novaLinha.insertCell(4);
        const celulaProjecao = novaLinha.insertCell(5);
        const celulaAcoes = novaLinha.insertCell(6);

        celulaMes.innerHTML = dados.mes;
        celulaDescricao.innerHTML = dados.descricao;
        celulaPeriodo.innerHTML = dados.periodo;
        celulaQtd.innerHTML = dados.qtdVendasPeriodo;
        celulaPreco.innerHTML = 'R$ ' + dados.precoVenda;
        celulaProjecao.innerHTML = '';  // Aqui você pode adicionar a lógica para calcular a projeção
        celulaAcoes.innerHTML = '<img src="asserts/img/Caneta.svg" alt="editar"> <img src="asserts/img/Lixeira.svg" alt="Lixeira" style="cursor:pointer;" onclick="excluirLinha(this)">';
        novaLinha.classList.add('linhaTabela');
    });
}
