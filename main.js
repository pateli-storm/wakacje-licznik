setInterval(time, 1000);
function time() {
  let days_p = document.getElementById("days");
  let hours_p = document.getElementById("hours");
  let minutes_p = document.getElementById("minutes");
  let seconds_p = document.getElementById("seconds");

  let progress_p = document.getElementById("progress_p");
  let progress_div = document.getElementById('progress_div');

  const teraz = new Date();
  let rok = teraz.getFullYear();
  const terazMili = teraz.getTime();

  const KoniecRoku = new Date(`June 21, ${rok} 09:00:00`).getTime();

  //roznica w milisek. miedzy teraz a koncem roku
  let diff = Math.abs(KoniecRoku - terazMili);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const fixedDays = days < 10 ? "0" + days : days;
  const fixedHours = hours < 10 ? "0" + hours : hours;
  const fixedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const fixedSeconds = seconds < 10 ? "0" + seconds : seconds;

  const fullDay = diff / (1000 * 60 * 60 * 24);
  days_p.textContent = fixedDays;
  hours_p.textContent = fixedHours;
  minutes_p.textContent = fixedMinutes;
  seconds_p.textContent = fixedSeconds;


  let dniSzkolne = 292;
  let procent = (fullDay / dniSzkolne) * 100;
  let fixedProcent = 100 - procent;
  progress_p.textContent = `${fixedProcent.toFixed(1)}%`;
  progress_div.style.width = `${fixedProcent.toFixed(1)}%`;
}
time();
