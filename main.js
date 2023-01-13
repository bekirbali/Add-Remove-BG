const body = document.querySelector("body");
console.log(body);

let c1 = Math.round(Math.random() * 255);
let c2 = Math.round(Math.random() * 255);
let c3 = Math.round(Math.random() * 255);

const button = document.querySelector(".change-color");

button.addEventListener("click", (e) => {
  body.style.backgroundColor += `rgb(${c1},${c2},${c3})`;
});
