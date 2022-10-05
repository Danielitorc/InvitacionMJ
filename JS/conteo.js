const $days = document.getElementById('days');
const $hours = document.getElementById('hours');
const $minutes = document.getElementById('minutes');
const $seconds = document.getElementById('seconds');

//Fecha a futuro
const countDownDate = new Date('Oct 22 2022 17:00:00').getTime();


let interval = setInterval(function(){
    //Obtener fecha actual
    const now = new Date().getTime();

    //Obtener las distancias entre fechas
    let distance = countDownDate - now;

    //Calculo a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 * 60)) / (1000));
    
    //Muestro resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);
}, 1000);