document.addEventListener('DOMContentLoaded', (event) => {
  const btnAdicionar = document.querySelector('.btn.btn-secondary.btn-lg.btn-block');
  const tabela = document.querySelector('.table tbody');

  btnAdicionar.addEventListener('click', () => {
    const investimentoPreOperacional = document.getElementById('numberinvestimentoPreOperacional').value;
    const valorInvestimento = document.getElementById('numbervalorInvestimento').value;

    if (investimentoPreOperacional && valorInvestimento) {
      const newRow = tabela.insertRow();

      const cellDescricao = newRow.insertCell(0);
      const cellQuantidade = newRow.insertCell(1);
      const cellValor = newRow.insertCell(2);
      const cellTotal = newRow.insertCell(3);
      const cellAcoes = newRow.insertCell(4);

      cellDescricao.textContent = 'Aporte pre-operacional'; // Ajustar conforme necessário
      cellQuantidade.textContent = investimentoPreOperacional;
      cellValor.textContent = `R$: ${valorInvestimento}`;
      cellTotal.textContent = `R$: ${valorInvestimento}`; // Ajustar cálculo total conforme necessário
      cellAcoes.innerHTML = '<img src="asserts/img/Caneta.svg" alt="editar"> <img src="asserts/img/Lixeira.svg" alt="Lixeira">';

      // Limpar os campos de entrada
      document.getElementById('numberinvestimentoPreOperacional').value = '';
      document.getElementById('numbervalorInvestimento').value = '';
    } else {
      alert('Por favor, preencha todos os campos antes de adicionar.');
    }
  });
});
