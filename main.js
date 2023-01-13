const body = document.querySelector("body");
console.log(body);
let newList = null;
const button = document.querySelector(".change-color");
const box = document.querySelector(".input-box");
const inp = document.querySelector("#input");
inp.setAttribute("placeholder", "Add Something");
const ul = document.createElement("ul");
const add = document.querySelector(".add");
const del = document.querySelector(".delete");

button.after(ul);
ul.style.listStyleType = "none";
ul.style.textAlign = "center";

add.addEventListener("click", () => {
  console.log(ul);
  inp.value ? (ul.innerHTML += `<li>${inp.value}</li>`) : alert("add a value");
  inp.value = "";
  inp.focus();
});

inp.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    inp.value
      ? (ul.innerHTML += `<li>${inp.value}</li>`)
      : alert("add a value");
    inp.value = "";
    inp.focus();
  }
});

del.addEventListener("click", () => {
  if (ul.childElementCount === 0) {
    alert("nothing to delete");
  } else {
    ul.lastChild.remove();
  }
});

button.addEventListener("click", (e) => {
  let c1 = Math.round(Math.random() * 255);
  let c2 = Math.round(Math.random() * 255);
  let c3 = Math.round(Math.random() * 255);
  let rgb = `rgb(${c1},${c2},${c3})`;
  if (e) {
    body.style.backgroundColor = rgb;
  }
});
