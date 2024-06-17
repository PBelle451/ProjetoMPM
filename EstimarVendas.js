document.addEventListener("DOMContentLoaded", function () {
    function adicionarLinha() {
        // Capturar os valores dos campos de entrada
        const descricao = document.getElementById("txtdescricao").value;
        const qtdVendasPeriodo = document.getElementById("txtqtdVendasPeriodo").value;
        const periodo = document.getElementById("datePeriodo").value;
        const precoVenda = document.getElementById("numberprecoVenda").value;
        const estimativaMax = document.getElementById("numberestimativaMax").value;

        // Validação básica dos campos obrigatórios
        if (!descricao || !qtdVendasPeriodo || !precoVenda) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Cálculo da projeção
        const projecao = qtdVendasPeriodo * precoVenda;

        // Criar uma nova linha na tabela
        const tabela = document.getElementById("minhaTabela").getElementsByTagName("tbody")[0];
        const novaLinha = tabela.insertRow();

        // Adicionar as células na nova linha
        novaLinha.insertCell(0).textContent = descricao;
        novaLinha.insertCell(1).textContent = periodo;
        novaLinha.insertCell(2).textContent = qtdVendasPeriodo;
        novaLinha.insertCell(3).textContent = `R$ ${parseFloat(precoVenda).toFixed(2)}`;
        novaLinha.insertCell(4).textContent = `R$ ${parseFloat(projecao).toFixed(2)}`;
        const acoesCell = novaLinha.insertCell(5);

        // Botão de remover linha
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.classList.add("btn", "btn-danger");
        btnRemover.onclick = function () {
            tabela.deleteRow(novaLinha.rowIndex - 1);
        };
        acoesCell.appendChild(btnRemover);

        // Limpar os campos de entrada
        document.getElementById("txtdescricao").value = '';
        document.getElementById("txtqtdVendasPeriodo").value = '';
        document.getElementById("datePeriodo").value = '';
        document.getElementById("numberprecoVenda").value = '';
        document.getElementById("numberestimativaMax").value = '';
    }

    // Adicionar evento ao botão
    document.querySelector(".btn-block").addEventListener("click", adicionarLinha);
});
