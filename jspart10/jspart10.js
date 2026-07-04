// // mouse/pointer events
// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//   btn.onclick = sayHello;
//   btn.onmouseenter = function () {
//     console.log("you entered a button");
//   };
//   console.dir(btn);
// }

// function sayHello() {
//   alert("Hello!");
// }
//EVENT LISTNER
// let btns = document.querySelectorAll("button");

// for  ( let btn of btns) {
//   // btn.onclick = sayHello;
//   // btn.onclick = sayName;

//   btn.addEventListener("click", sayHello);
//   btn.addEventListener("click", sayName);
// }

// function sayHello() {
//   alert("Hello!");
// }

// function sayName() {
//   alert("Apna College");
// }
//ACTIVITY
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let randomColor = getRandomColor();
//   h3.innerText = randomColor;

//   let div = document.querySelector("div");
//   div.style.backgroundColor = randomColor;

//   console.log("color updated");
// });

// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red}, ${green}, ${blue})`;
//   return color;
// }
//EVENT LISTNER for elements
let p = document.querySelector("p");

p.addEventListener("click", function () {
  console.log("parah was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
  console.log("mouse inside box");
});
