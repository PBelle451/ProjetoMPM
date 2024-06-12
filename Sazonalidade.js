document.addEventListener('DOMContentLoaded', function() {
    // Função para ajustar os dados na tabela de sazonalidade
    function ajustarDados() {
        const primeiroMes = document.getElementById('txtprimeiroMes').value;
        const nMeses = parseInt(document.getElementById('numbernMeses').value);
        const metaFaturamento = parseFloat(document.getElementById('txtmetaFaturamento').value.replace('R$: ', '').replace('.', '').replace(',', '.'));

        if (!primeiroMes || isNaN(nMeses) || isNaN(metaFaturamento)) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        const tabela = document.getElementById('tabelaSazonalidade').getElementsByTagName('tbody')[0];
        tabela.innerHTML = '';

        const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        let mesIndex = meses.indexOf(primeiroMes.substring(0, 3));

        for (let i = 0; i < nMeses; i++) {
            const mes = `${meses[mesIndex]}/${primeiroMes.substring(3)}`;
            const sazonalidade = (Math.random() * (50 - 10) + 10).toFixed(2); // Gera um valor de sazonalidade aleatório entre 10% e 50%
            const faturamento = (metaFaturamento * (sazonalidade / 100)).toFixed(2);

            const row = tabela.insertRow();
            row.innerHTML = `
                <td>${mes}</td>
                <td>${sazonalidade}%</td>
                <td>R$: ${faturamento.replace('.', ',')}</td>
            `;

            mesIndex = (mesIndex + 1) % 12;
            if (mesIndex === 0) {
                primeiroMes = `${meses[mesIndex]}/${parseInt(primeiroMes.substring(3)) + 1}`;
            }
        }
    }

    // Função para enviar os dados (pode ser ajustada para realmente enviar os dados se necessário)
    function enviarDados() {
        alert('Dados enviados com sucesso!');
    }

    // Adiciona os event listeners para os botões
    document.getElementById('ajustarDadosBtn').addEventListener('click', ajustarDados);
    document.getElementById('enviarDadosBtn').addEventListener('click', enviarDados);
});
