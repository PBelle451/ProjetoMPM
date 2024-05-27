document.addEventListener("DOMContentLoaded", function () {
    // Adicionar event listener ao botão "Adicionar"
    var addButton = document.querySelector('.btn-block');
    addButton.addEventListener('click', adicionarInvestimento);
  
    function adicionarInvestimento() {
      // Obter valores dos campos de entrada
      var investimento = document.getElementById('numberinvestimentoPreOperacional').value;
      var valorInvestimento = document.getElementById('numbervalorInvestimento').value;
  
      // Validar se os campos foram preenchidos
      if (!investimento || !valorInvestimento) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      // Criar nova linha na tabela
      var tableBody = document.querySelector('.table-borderless tbody');
      var newRow = tableBody.insertRow();
  
      // Adicionar células à nova linha
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
      var cell5 = newRow.insertCell(4);
  
      // Preencher células com os valores dos campos de entrada
      cell1.innerHTML = 'Novo Investimento'; // Personalize conforme necessário
      cell2.innerHTML = '000'; // Personalize conforme necessário
      cell3.innerHTML = 'R$: ' + investimento;
      cell4.innerHTML = 'R$: ' + valorInvestimento;
      cell5.innerHTML = '<img src="asserts/img/Caneta.svg" alt="editar"> <img src="asserts/img/Lixeira.svg" alt="Lixeira">';
  
      // Limpar campos após a adição
      document.getElementById('numberinvestimentoPreOperacional').value = '';
      document.getElementById('numbervalorInvestimento').value = '';
      
    }
  });
  