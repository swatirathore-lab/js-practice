// //Selecting element by classname
// let smallImages = document.getElementsByClassName("oldImg");
// for(let i=0;i< smallImages.length;i++){
//     smallImages[i].src="assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);

// }
// //Query Selector
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("div a"));
// console.dir(document.querySelectorAll("div a"));
// //manip[ulating style (with style attribute)
// let links = document.querySelectorAll(".box a");
// for(let i=0; i<links.length; i++){
//     links[i].computedStyleMap.color ="green";
// }
//practice question
let para1=document.createElement("p");
para1.innerText ="Hey I'm red";
document.querySelector("body").append(para1);
para1.classList.add("red");
//b
let H3=document.createElement("h3");
H3.innerText ="Hey I'm blue H3";
document.querySelector("body").append(H3);
H3.classList.add("blue");
//c
let div =document.createElement("div");
let h1 =document.createElement("h1");
let para2=document.createElement("p");
h1.innerText="I'm in a div";
para2.innerText="ME TOO!";
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);
