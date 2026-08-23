function firstnelements(arr,n){
    return arr.slice(0,n);//It's because slice(start, end) in JavaScript — the end index is exclusive, not inclusive. It means "go up to, but don't include, this index."
}
console.log(firstnelements([2,8,0,-2,5,6,7],6));//size starts from zero
function lastnelements(arr,n){
    return arr.slice(-n);
}
console.log(lastnelements([2,8,0,-2,5,6,7],3));
function isstringblank(string){
    return string.trim().length===0;
}
console.log(isstringblank("   "));
console.log(isstringblank("hello"));
function lowercase(string,index){
    const char=string[index];
    return char===char.toLowerCase() && char!==char.toUpperCase();
}
console.log(lowercase("bdbdcj",4));
console.log(lowercase("jjDnjnk",2));
function trimspaces(string){
    return string.trim();
}
console.log(trimspaces("     hello dumbo    "));
function elementexist(array,ele){
    return array.includes(ele);
}
console.log(elementexist([5,6,8,9,4],6));