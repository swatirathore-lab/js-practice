let arr = [1,2,3,4,5];
function print(el) {
    console.log(el);
}
arr.forEach(print);
//Or
arr.forEach(function(el){
    console.log(el);
});
//for each for objects
let arr1= [{
    name:"aman",
    marks:95,
},
{
    name:"shradha",
    marks:94.4,
},
{
    name:"rajat",
    marks:92,
},
];
arr1.forEach(student=> {
    console.log(student);
    console.log(student.marks);
});
//map function for an array
let num=[1,2,3,4,5];
let double= num.map((el)=> {
    return el*el;

});
console.log(double);
let student= [{
    name:"aman",
    marks:95,
},
{
    name:"shradha",
    marks:94.4,
},
{
    name:"rajat",
    marks:92,
},
];
let gpa=student.map((el)=>{
    return el.marks/10;
});
console.log(gpa);
let nums=[1,2,3,4,5,6,7,8,9,10,11,12];
let ans=nums.filter((el)=>{
    return el%2 ==0;//even->true
});
console.log(ans);
//reduce method
let nums1=[1,2,3,4];
// provide an initial value to reduce to avoid errors on empty arrays
let finalVal = nums1.reduce((res, el) => res + el, 0);
console.log(finalVal);
//output 10
//maximum in array***********//
let arr2=[1,4,2,5,6,7,2,9,2];
let max=-1;
for(let i=0;i<arr2.length;i++){
    if(max<arr2[i]){
        max=arr2[i];
    }
}
console.log(max);
//with help of reduce function
let maxx=arr2.reduce((maxx,el)=>{
    if(maxx<el){
        return el;
    }else {
        return maxx;
    }
});
console.log(maxx);
//practice questions
let nums3 =[10,20,30,40];
let anss=nums.every((ele)=>ele%10==0);
console.log(anss);
let min=nums3.reduce((min,ele)=>{
    if(min<ele){
        return min;
    }else {
        return ele;
    }
    return min;
});
console.log(min);
//default parameter
function sums(a,b=2){
    return a+b;
}
console.log(sums(1,3));//4
console.log(sums(1));//3
function sumss(a=2,b){
    return a+b;
}
console.log(sumss(1,3));//4
console.log(sumss(1));//NAN
//spread with array literals
let arr4=[1,2,3,4,5];
let newarr=[...arr4];
let chars=[..."hello"];
let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let nums6=[...even,...odd];
const data={
    email:"ironman@gmail.com",
    password:"abcd",
};
const datacopy={...data,id:123,country:"india"};
let arr5=[1,3,3,4,5];//val
let obj1={...arr5}//obj:->key:val
let obj2={..."hello"};
console.log(datacopy);
console.log(obj1);
console.log(obj2);
//rest
function sum6(...args){
    //arguments
    for(let i=0;i<args.length;i++){
        console.log("you gave us: ",args[i]);
    }

}
function minnn(a,b,c,d){
    console.log(arguments);
    console.log(arguments.length);
    // arguments.push(1);//not possible this is in array methods---to use array methods with arguments we will use rest
}
//using rest
function sum9(...args){
    return args.reduce((sum9,el)=>sum9+el);
}
minnn(1, 2, 3, 4);//call with actual name and argumnts ,console.log will just print function definition my mistake asked from claude
console.log(sum9(1,2,3,4,5));
// Same mistake as before — calling vs displaying. Easy pattern to remember:

// console.log(functionName) → prints function definition
// functionName() → runs it, result goes nowhere
// console.log(functionName()) → runs it and displays the result --condition function should have return value
//destructuring
let nums7 =["tony","bruce","peter","steve","abc","xyz","pyq"];
// let winner1 =nums7[0];
// let runnerup=nums7[1];
// let secondrunnerup=names[2];
let [winner1,runnerup,...others]=nums7;
//deconstructing with objecta
const student8={
    name:"karan",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    username:"karan@123",
    password:"abcd"
}

// let {username,password}=student8;//karan@123---abcd
// let {user,password}=student8;//user undefined
let {username:user,password:secret,city="mumbai"}=student8;