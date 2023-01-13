const body = document.querySelector("body");
console.log(body);

const button = document.querySelector(".change-color");
button.addEventListener("click", (e) => {
  let c1 = Math.round(Math.random() * 255);
  let c2 = Math.round(Math.random() * 255);
  let c3 = Math.round(Math.random() * 255);
  let rgb = `rgb(${c1},${c2},${c3})`;
  if (e) {
    body.style.backgroundColor = rgb;
  }

  console.log(e);
});
