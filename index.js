let homecount = 0;
let guestcount = 0;
let zero = 0;

function plusone() {
  let score = document.getElementById("home-Score");
  homecount += 1;
  score.textContent = homecount;
}

function plustwo() {
  let score = document.getElementById("home-Score");
  homecount += 2;
  score.textContent = homecount;
}
function plusthree() {
  let score = document.getElementById("home-Score");
  homecount += 3;
  score.textContent = homecount;
}

function one() {
  let score = document.getElementById("guest-score");
  guestcount += 1;
  score.textContent = guestcount;
}

function two() {
  let score = document.getElementById("guest-score");
  guestcount += 2;
  score.textContent = guestcount;
}
function three() {
  let score = document.getElementById("guest-score");
  guestcount += 3;
  score.textContent = guestcount;
}

function reset() {
  let score1 = document.getElementById("guest-score");
  console.log(score1);
  let score2 = document.getElementById("home-Score");
  console.log(score2);
  score1.textContent = zero;
  score2.textContent = zero;
}
