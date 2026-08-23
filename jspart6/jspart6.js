let str = ["hii","hello","bye","!"];
function concat(str){
    let result="";

    for(let i=0;i<str.length; i++){
        result=result+str[i];
    }
    return result;
}
//higher order function