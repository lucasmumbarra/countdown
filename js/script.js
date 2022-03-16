let countDownDate = new Date("Feb 14, 2023 19:00:00").getTime();

let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
  let second = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = day;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
}, 1000);

let modal = document.getElementById("myModal");
let btn = document.getElementById("btnModal");
let span = document.getElementsByClassName("modal-close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}