document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input, select');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      let isValid = true;
  
      inputs.forEach(input => {
        if (input.value.trim() === '' && input.hasAttribute('required')) {
          isValid = false;
          input.classList.add('is-invalid');
        } else {
          input.classList.remove('is-invalid');
        }
      });
  
      if (isValid) {
        alert("Formulário Enviado com Sucesso");
        form.reset();
      } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    });
  
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
          input.classList.remove('is-invalid');
        }
      });
    });
  });
  