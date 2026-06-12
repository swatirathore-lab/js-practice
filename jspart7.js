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
const mul = (a,b) => a*b;
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
