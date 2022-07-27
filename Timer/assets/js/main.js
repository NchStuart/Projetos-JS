const relogio = document.querySelector('.horaatual');
const btnPause = document.querySelector('.pausar');
const btnZerar = document.querySelector('.zerar');
const btnIniciar = document.querySelector('.iniciar');
let segundos = 0;
let timer;

function getTimeSeconds(segundos) {
  const dataInput = new Date(segundos * 1000);
  return dataInput.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT' // VAI COMEÇAR 00:00:00 COM O GMT 
  });
}

function startTimer() {
  timer = setInterval(() => {
    segundos++
    relogio.innerHTML = getTimeSeconds(segundos);
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

btnIniciar.addEventListener('click', () => {
  startTimer();
  setTimeout(() => {
    relogio.style.color = 'black';
  }, 1000);
});

btnPause.addEventListener('click', (e) => {
  console.log('Voce pausou o tempo');
    pauseTimer();
    relogio.style.color = 'red';
});


btnZerar.addEventListener('click', function horaZ() {
  console.log('Voce zerou o tempo');
  pauseTimer();
  segundos = 0;
  relogio.innerHTML = getTimeSeconds(segundos);
  relogio.style.color = 'black';
});

