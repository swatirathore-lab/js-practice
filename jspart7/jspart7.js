/**this */
const student = {
    name: "Alice",
    age: 20,
    eng:25,
    math:21,
    science:23,
    getavg() {
        console.log(this);
        let avg = ( this.eng + this.math + this.science ) / 3;
        console.log(`${this.name} got avg marks ${avg}`);
    }
};

function getavg() {
        console.log(this);
}
/**try & catch */
console.log("hello");
console.log("hello");
try {
console.log(a);
} catch(error) {
    console.log("caught an error...a is not defined");
    console.log(error);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");
/**arrow functions */
const sum = (a,b) => {
    console.log (a+b);
};
const cube = n => {
    console.log(n*n*n);
};
const power =(a,b) =>{
    console.log(a**b);
};
const hello = () => {
    console.log("hello world");
}
/** implicit arrow function */
const mul = (a,b) =>(a*b);
/** set time out */
console.log("hii there!");

setTimeout( () => {
    console.log("Apna College");
}, 4000);
console.log("welcome to");
console.log("welcome to");
console.log("welcome to");
console.log("welcome to");
/** set interval */
// let id=setInterval( () => {
//     console.log("Apna College");
// },2000);

/**to stop this you have to just type clearinterval(id) */
//this with arrow functions
const student1 = {
    name:"aman",
    marks: 95,
    prop: this,//global scope
    getName: function(){
        console.log(this);//marks variable student object ke liye define hai
        return this.name;

    },
    getMarks: () => {
        console.log(this);//parent's scope--windows-- marks variable window object ke liye define hi nhi hai
        return this.marks;
    },
    getInfo1: function() {
        setTimeout( ()=> {
            console.log(this)//student----arrow function ke lie this hai uske parent ka this--which is function and uska object hai student
        },2000);
    },
    getInfo2: function() {
        setTimeout(function() {
            console.log(this)//windows---normal function ke liye this jis function ne usko callout kiya hai which is settimeout--aur uska object hai windows
        },2000);
    }
};
//practice questions
const square =(n)=>n*n;
console.log(square(4));
let id=setInterval(()=> {
    console.log("Hello World");
},2000);
setTimeout( ()=> {
    clearInterval(id);
},1000);


