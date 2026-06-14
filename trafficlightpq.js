let color=prompt("please enter the color")
if (color="red"){
    console.log('STOP');
}
else if (color="yellow"){
    console.log("WAIT");
}
else if (color="green"){
    console.log("GO");
}




/*To-do app — array methods used
todos.push(item)
Adds an item to the end of the array.
todos.push("buy milk"); // ["buy milk"]
todos.indexOf(item)
Returns the index of the item. Returns -1 if not found — always check for this.
todos.indexOf("buy milk"); // 0
todos.indexOf("fly")      // -1 (not found)
todos.splice(index, 1)
Removes 1 item at the given index. The original array is modified.
let arr = ["a", "b", "c"];
arr.splice(1, 1); // removes "b"
// arr is now ["a", "c"]
todos.join(separator)
Combines all array items into a single string, with the separator between each.
["milk", "eggs", "bread"].join("\n");
// "milk\neggs\nbread"  → each on new line in alert

["milk", "eggs"].join(", ");
// "milk, eggs"
todos.length
Number of items in the array. Use todos.length == 0 to check if empty.
Common bugs to watch out for
String comparisons need quotes — without quotes JS thinks it's a variable name.
if (task == add)    // ❌ 'add' is treated as a variable
if (task == "add")  // ✅ correct
Always store prompt() in a variable — otherwise the input is lost.
prompt("enter task");          // ❌ goes nowhere
let t = prompt("enter task"); // ✅
A while(true) loop needs a break to stop — otherwise it runs forever.
while (true) {
  if (task == "quit") break; // ✅ exit condition
} */