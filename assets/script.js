/* Relógio */
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let h = dateToday.getHours();
  let min = dateToday.getMinutes();
  let seg = dateToday.getSeconds();

  if (h < 10) h = "0" + h;
  if (min < 10) min = "0" + min;
  if (seg < 10) seg = "0" + seg;

  horas.textContent = h;
  minutos.textContent = min;
  segundos.textContent = seg;
});

/* Data completa */

const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

const timeNow = setInterval(function calendar() {
  let dateToday = new Date();
  let dateNow = dateToday.getDate();
  let monthNow = dateToday.getMonth();
  let yearNow = dateToday.getFullYear();

  if (dateNow < 10) dateNow = "0" + dateNow;
  if (monthNow < 10) monthNow = "0" + monthNow;

  date.textContent = dateNow;
  month.textContent = monthNow;
  year.textContent = yearNow;
});

/* Dia da Semana */
const day = document.getElementById("day");

const weekDay = setInterval(function dateOfWeek() {
  let dateWeek = new Date();
  let dayValue = dateWeek.getDay();

  const dayString = {
    0: "Domingo",
    1: "Segunda-feira",
    2: "Terça-feira",
    3: "Quarta-feira",
    4: "Quinta-feira ",
    5: "Sexta-feira",
    6: "Sábado",
  };

  const today = dayString[dayValue];

  day.textContent = today;
});
