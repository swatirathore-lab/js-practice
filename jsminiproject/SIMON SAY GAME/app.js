let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let h2=document.querySelector("h2");
let btn=document.querySelectorAll(".btn");//selects all four elements with the class btn.
document.addEventListener("keypress",function(){
    if(!started){
        console.log("game started");
        levelup();
        started=true;
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
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(randomcolor);
}
function checkAns(){
    console.log("curr level :" + level);
}
function btnpress(){//yha par this whi hai jo click hoga button
    console.log(this);//userne jo button click kiya uska reference aayega
    let btn=this;//userne jo button click kiya uska reference aayega
    userflash(btn);//userne jo button click kiya uska reference aayega
    usercolor=btn.getAttribute("id");//userne jo button click kiya uska reference aayega
    console.log(usercolor);
    userseq.push(usercolor);
    checkAns();
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

