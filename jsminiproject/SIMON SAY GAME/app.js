let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let h2=document.querySelector("h2");
let btn=document.querySelectorAll(".btn");//selects all four elements with the class btn.
document.addEventListener("keypress", function() {
    if (!started) {
        started = true;
        console.log("game started");
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },100);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText="Level " + level;
    //jab hum user ko click karege tab flash karaynge button ko aur phir game me bhi whi karege
    let randomidx=Math.floor(Math.random()*4);
    let randomcolor=btn[randomidx];
    let randBtn=document.querySelector(`#${randomcolor.id}`);
    // console.log(randomidx);
    // console.log(randomcolor);
    // console.log(randBtn);
    //tackle kar rahe ab arrays
    gameseq.push(randomcolor.classList[1]);
    console.log(gameseq);
    gameflash(randomcolor);
}
function checkAns(idx) {
    

    if (userseq[idx] == gameseq[idx]) {
        // console.log("same value");
        if(userseq.length==gameseq.length){
            setTimeout(function(){
                userseq=[];
                levelup();
            },1000);
        }    
    } else {
        // h2.innerText = "Game Over! Press any key to start."; innertext ke andar tags nahi de sakte isliye hum innerhtml banaynge
        //score bhi to display karna hai uske liye function
        h2.innerHTML=`game over! your score is ${level}. Press any key to start.`;
        //game over hone par reset karna hoga game ko
        //ab gameover ho raha to puri screen red ho jaye uske liye function banayenge
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}
// function checkAns(idx) {
//     if (userseq[idx] === gameseq[idx]) {
//         console.log("Same value!");

//         if (userseq.length === gameseq.length) {
//             setTimeout(function () {
//                 levelup();
//             }, 1000);
//         }
//     } else {
//         h2.innerHTML = `Game Over! Your score is ${level - 1}. Press any key to restart.`;

//         document.querySelector("body").style.backgroundColor = "red";

//         setTimeout(function () {
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 150);

//         reset();
//     }
// }
function btnpress(){//yha par this whi hai jo click hoga button
    console.log(this);//userne jo button click kiya uska reference aayega
    let btn=this;//userne jo button click kiya uska reference aayega
    userflash(btn);//userne jo button click kiya uska reference aayega
    usercolor=btn.getAttribute("id");//userne jo button click kiya uska reference aayega
    console.log(usercolor);
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
// function btnpress() {
//     if (!started) return;
//     let btn = this;

//     userflash(btn);

//     let usercolor = btn.getAttribute("id");

//     userseq.push(usercolor);

//     checkAns(userseq.length - 1);
// }
let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
