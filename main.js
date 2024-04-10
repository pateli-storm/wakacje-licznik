setInterval(time, 1000);
function time() {
  const teraz = new Date();

  let days = document.getElementById('days');
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');

  days.textContent = teraz.getDay();
  hours.textContent = teraz.getHours();

  const minuta = teraz.getMinutes();
  let fixedMinuta = minuta < 10 ? `0${minuta}` : minuta;

  const sekunda = teraz.getSeconds();
  let fixedSekunda = sekunda < 10 ? `0${sekunda}` : sekunda;

  minutes.textContent = fixedMinuta;
  seconds.textContent = fixedSekunda;
}
