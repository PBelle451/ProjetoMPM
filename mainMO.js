document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o botão de adicionar
  const addButton = document.querySelector('button.btn.btn-secondary.btn-lg.btn-block');

  // Adiciona o evento de clique ao botão de adicionar
  addButton.addEventListener('click', function () {
      // Obtém os valores dos campos de entrada
      const cargo = document.getElementById('txtcargo').value;
      const provisao = document.getElementById('numberprovisao').value;
      const encargo = document.getElementById('txtencargo').value;
      const colaboradores = document.getElementById('txtColaboradores').value;
      const decimoTerceiro = document.getElementById('decimoTerceiro').value;
      const ferias = document.getElementById('numberferias').value;
      const alimentacao = document.getElementById('txtAlimentacao').value;
      const transporte = document.getElementById('txtTransporte').value;

      // Calcula o total de custos (ajuste conforme necessário)
      const totalCusto = parseFloat(provisao) + parseFloat(decimoTerceiro) + parseFloat(ferias) + parseFloat(alimentacao) + parseFloat(transporte);

      // Seleciona o corpo da tabela
      const tableBody = document.querySelector('table.table tbody');

      // Cria uma nova linha na tabela
      const newRow = document.createElement('tr');

      // Define o conteúdo da nova linha
      newRow.innerHTML = `
          <td>${cargo}</td>
          <td></td>
          <td>${provisao}</td>
          <td>${decimoTerceiro}</td>
          <td>${ferias}</td>
          <td>${encargo}</td>
          <td>R$: ${alimentacao}</td>
          <td>${new Date().toLocaleDateString()}</td>
          <td>R$: ${totalCusto.toFixed(2)}</td>
          <td class="icones"><img src="asserts/img/Caneta.svg" alt="editar"> <img src="asserts/img/Lixeira.svg" alt="Lixeira"></td>
      `;

      // Adiciona a nova linha ao corpo da tabela
      tableBody.appendChild(newRow);

      // Limpa os campos de entrada
      document.getElementById('txtcargo').value = '';
      document.getElementById('numberprovisao').value = '';
      document.getElementById('txtencargo').value = '';
      document.getElementById('txtColaboradores').value = '';
      document.getElementById('decimoTerceiro').value = '';
      document.getElementById('numberferias').value = '';
      document.getElementById('txtAlimentacao').value = '';
      document.getElementById('txtTransporte').value = '';
  });
});
