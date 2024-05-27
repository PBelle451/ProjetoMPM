const adicionarButton = document.querySelector('.btn-secondary.btn-lg.btn-block');
const proximoButton = document.querySelector('.btn-secondary.btn-lg.btn-block');

adicionarButton.addEventListener('click', () => {
  // Add the data from the form to the table
  const cargo = document.getElementById('txtcargo').value;
  const salarioMensal = parseFloat(document.getElementById('numberprovisao').value);
  const quantidadeFuncionarios = parseInt(document.getElementById('txtColaboradores').value);
  const avisoPrevio = salarioMensal / 12;
  const decimoTerceiro = salarioMensal / 12;
  const ferias = (salarioMensal / 12) + (salarioMensal / 12 * 0.3);
  const encargo = document.getElementById('txtencargo').value;
  const colaboradores = document.getElementById('txtColaboradores').value;
  const inss = document.getElementById('txtinss').value;
  const beneficio = document.getElementById('numberferias').value;
  const valorAlimentacao = parseFloat(document.getElementById('txtAlimentacao').value);
  const valorTransporte = parseFloat(document.getElementById('txtTransporte').value);
  // Create a new row for the table
const row = document.createElement('tr');

// Cálculos adicionais
  const fgts = (salarioMensal + avisoPrevio + ferias) * 0.08;
  const inssEmpresa = (salarioMensal + avisoPrevio + ferias) * 0.2;

  const alimentacao = valorAlimentacao * 22; // Assuming 22 working days in a month
  const transporte = valorTransporte * 22; // Assuming 22 working days in a month
  const totalMensal = quantidadeFuncionarios * salarioMensal + (avisoPrevio + decimoTerceiro + ferias + fgts + inssEmpresa + alimentacao + transporte);

row.innerHTML = `
  <td>${cargo}</td>
  <td>R$: ${avisoPrevio.toFixed(2)}</td>
  <td>R$: ${encargo}</td>
  <td>R$: ${decimoTerceiro.toFixed(2)}</td>
  <td>R$: ${ferias.toFixed(2)}</td>
  <td>R$: ${inss}</td>
  <td>R$: ${beneficio}</td>
  <td>28/07/2024</td>
  <td>R$: ${totalMensal.toFixed(2)}</td>
  
  <td class="icones"><img src="asserts/img/Caneta.svg" alt="editar"> <img src="asserts/img/Lixeira.svg" alt="Lixeira"></td>
`;


  // Append the new row to the table body
  document.querySelector('tbody').appendChild(row);

  // Clear the form fields
  document.getElementById('txtcargo').value = '';
  document.getElementById('numberprovisao').value = '';
  document.getElementById('txtencargo').value = '';
  document.getElementById('txtColaboradores').value = '';
  document.getElementById('decimoTerceiro').value = '';
  document.getElementById('txtinss').value = '';
  document.getElementById('numberferias').value = '';
  document.getElementById('totalMensal').value = '';
});

proximoButton.addEventListener('click', () => {
  // Retrieve the data from the form
  const salarioMensal = parseFloat(document.getElementById('txtcargo').value);
  const quantidadeFuncionarios = parseInt(document.getElementById('txtColaboradores').value);
  const valorAlimentacao = parseFloat(document.getElementById('txtAlimentacao').value);
  const valorTransporte = parseFloat(document.getElementById('txtTransporte').value);

  // Calculate provision
  const avisoPrevio = salarioMensal / 12;
  const decimoTerceiro = salarioMensal / 12;
  const ferias = (salarioMensal / 12) + (salarioMensal / 12 * 0.3);

  // Calculate social charges
  const fgts = (salarioMensal + avisoPrevio + ferias) * 0.08;
  const inssEmpresa = (salarioMensal + avisoPrevio + ferias) * 0.2;

  // Calculate benefits
  const alimentacao = valorAlimentacao * 22; // Assuming 22 working days in a month
  const transporte = valorTransporte * 22; // Assuming 22 working days in a month
  
 
  // Calculate total monthly cost
  const totalMensal = quantidadeFuncionarios * salarioMensal + (avisoPrevio + decimoTerceiro + ferias + fgts + inssEmpresa + alimentacao + transporte);

  // Display the result or use it as needed
  console.log('Total Monthly Cost:', totalMensal);
});
