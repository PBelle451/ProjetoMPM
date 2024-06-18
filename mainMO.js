document.addEventListener('DOMContentLoaded', (event) => {
  const btnAdicionar = document.querySelector('.btn.btn-secondary.btn-lg.btn-block');
  const tabela = document.querySelector('.table tbody');

  btnAdicionar.addEventListener('click', () => {
      const cargo = document.getElementById('txtcargo').value;
      const provisao = document.getElementById('numberprovisao').value;
      const encargo = document.getElementById('txtencargo').value;
      const colaboradores = document.getElementById('txtColaboradores').value;
      const decimoTerceiro = document.getElementById('decimoTerceiro').value;
      const inss = document.getElementById('txtinss').value;
      const ferias = document.getElementById('numberferias').value;
      const alimentacao = document.getElementById('txtAlimentacao').value;
      const transporte = document.getElementById('txtTransporte').value;

      if (cargo && provisao && encargo && colaboradores && decimoTerceiro && inss && ferias && alimentacao && transporte) {
          const newRow = tabela.insertRow();

          const cellCargo = newRow.insertCell(0);
          const cellProvisoes = newRow.insertCell(1);
          const cellAvisoPrevio = newRow.insertCell(2);
          const cellDecimoTerceiro = newRow.insertCell(3);
          const cellFerias = newRow.insertCell(4);
          const cellEncargos = newRow.insertCell(5);
          const cellBeneficios = newRow.insertCell(6);
          const cellProjecao = newRow.insertCell(7);
          const cellTotalCusto = newRow.insertCell(8);
          const cellAcoes = newRow.insertCell(9);

          cellCargo.textContent = cargo;
          cellProvisoes.textContent = 'Anual'; // Ajustar conforme necessário
          cellAvisoPrevio.textContent = provisao;
          cellDecimoTerceiro.textContent = decimoTerceiro;
          cellFerias.textContent = ferias;
          cellEncargos.textContent = encargo;
          cellBeneficios.textContent = `R$: ${parseFloat(alimentacao) + parseFloat(transporte)}`;
          cellProjecao.textContent = 'xx/xx/xxxx'; // Ajustar conforme necessário
          cellTotalCusto.textContent = `R$: ${parseFloat(provisao) + parseFloat(decimoTerceiro) + parseFloat(ferias) + parseFloat(encargo) + parseFloat(alimentacao) + parseFloat(transporte)}`;
          cellAcoes.innerHTML = '<img src="asserts/img/Caneta.svg" alt="editar"> <img src="asserts/img/Lixeira.svg" alt="Lixeira">';

          // Limpar os campos de entrada
          document.getElementById('txtcargo').value = '';
          document.getElementById('numberprovisao').value = '';
          document.getElementById('txtencargo').value = '';
          document.getElementById('txtColaboradores').value = '';
          document.getElementById('decimoTerceiro').value = '';
          document.getElementById('txtinss').value = '';
          document.getElementById('numberferias').value = '';
          document.getElementById('txtAlimentacao').value = '';
          document.getElementById('txtTransporte').value = '';
      } else {
          alert('Por favor, preencha todos os campos antes de adicionar.');
      }
  });
});
