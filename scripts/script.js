const form = document.querySelector('form'); 
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const inputGroupConfirm = confirmPassword.parentElement; 

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const erroAnterior = inputGroupConfirm.querySelector('.erro-senha');
  if (erroAnterior) {
    erroAnterior.remove();
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
  }

  if (confirmPassword.value !== password.value) {
    const erroMsg = document.createElement('p');
    
    erroMsg.textContent = 'As senhas não correspondem';
    erroMsg.classList.add('erro-senha');
    
    erroMsg.style.color = 'red';
    erroMsg.style.fontSize = '0.9rem';
    erroMsg.style.marginTop = '5px';


    password.classList.add('error');
    confirmPassword.classList.add('error');
    inputGroupConfirm.appendChild(erroMsg);
    
    return;
  }

  alert('Conta criada com sucesso!');
});

phone.addEventListener('input', (event) => {
  if (event.inputType === 'deleteContentBackward' && (event.target.value.endsWith('-') || event.target.value.endsWith(' '))) {
    event.target.value = event.target.value.slice(0, -1);
  }

  let value = event.target.value;

  value = value.replace(/\D/g, "");

  if (value.length > 11) {
    value = value.slice(0, 11);
  }
  
  if (value.length > 0) {
    value = `(${value.slice(0, 2)}${value.length > 2 ? ') ' : ''}${value.slice(2)}`;
  }
  
  if (value.length > 13) {
    value = `${value.slice(0, 10)}-${value.slice(10)}`;
  } else if (value.length > 9) {
    value = `${value.slice(0, 9)}-${value.slice(9)}`;
  }

  event.target.value = value;
});
