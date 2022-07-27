const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputPeso = document.querySelector('#input-teste-1');
  const inputAltura = document.querySelector('#input-teste-2');
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso invalido!', false);
    return;
  };

  if (!altura) {
    setResultado('Altura invalida!', false);
    return;
  };

  const imc = getImc(peso, altura);
  const imcStatus = checkImc(imc);
  const msg = `Seu IMC é ${imc} (${imcStatus})`;

  setResultado(msg, true);
  
});

function checkImc(imc){

  const nivel = [
    'Abaixo do Peso',
    'Peso Normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ];

  if (imc >= 39.9 )  return nivel[5];
  if (imc >= 34.9 ) return nivel[4];
  if (imc >= 29.9 ) return nivel[3];
  if (imc >= 24.9 ) return nivel[2];
  if (imc >= 18.5 ) return nivel[1];
  if (imc <  18.5 )  return nivel[0];

};

function getImc(peso,altura) {
  const calc = peso / altura ** 2;
  return calc.toFixed(2);
};

function setResultado(msg, valid) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = '';
  resultado.innerHTML = `<p>${msg}</p>`;

  if (valid) {
    resultado.style.background = 'green';
  } else {
    resultado.style.background = 'red';
  }
}