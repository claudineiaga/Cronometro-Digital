const unidtempo = document.querySelectorAll('#unidtempo .tempo');
const acao = document.querySelectorAll('#acao .botao');

function horas() {
    let counter = parseInt(unidtempo[0].innerHTML);
  
    counter++;
    tempo[0].innerHTML = counter < 10 ? `0${counter}` : counter;
}
function minutos() {
    let counter = parseInt(unidtempo[1].innerHTML);
  
    counter++;
    unidtempo[1].innerHTML = counter < 10 ? `0${counter}` : counter;
  
    if (counter == 60) {
      unidtempo[1].innerHTML = '00';
      horas();
    }
}
function segundos() {
    let counter = parseInt(unidtempo[2].innerHTML);
  
    counter++;
    unidtempo[2].innerHTML = counter < 10 ? `0${counter}` : counter;
  
    if (counter == 60) {
      unidtempo[2].innerHTML = '00';
      minutos();
    }
}
function startTimer() {
    const interval = setInterval(() => {
      let counter = parseInt(unidtempo[3].innerHTML);
      counter++;
          
      unidtempo[3].innerHTML = counter < 10 ? `0${counter}` : counter;
        
      if (counter == 100) {
          unidtempo[3].innerHTML = '00';
        segundos();
      }
    }, 10);
  
    acao[1].onclick = () => {
      clearInterval(interval);
      // delete active class name on start button
      acao[0].className = acao[0].className.split(' ')[0];
    }
  }
  
  acao[0].onclick = () => {
    if (acao[0].className.search('active') === -1) {
      startTimer();
      acao[0].className += ' active';
    }
  }

  acao[2].onclick = () => {
    for (let i = 0; i < unidtempo.length; i++) {
      unidtempo[i].innerHTML = '00';
      // delete active class name on start button
      acao[0].className = acao[0].className.split(' ')[0];
    }
  }