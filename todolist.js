let task=prompt("Please enter the task:-add/delete/view/quit");
let todo=[];
while(true){

    if (task=="add"){
        let newtsk=prompt("enter a task");
        todo.push(newtsk);
        alert("task added");
        

    }
    else if (task=="delete"){
        let deltsk=prompt("enter a task to be deleted");
        let index=todo.indexOf(deltsk);
        if(index==-1){
            alert("no task has to be added")
        }else {
            todo.splice(index,1);
            alert("task has been deleted");
        }
    }
    else if (task=="view"){
        if(todo.length==0){
            alert("nothing in the to do list");
        }else{
            alert("task are:\n"+todo.join("\n"));
        }
    }
    else if (task=="quit"){
        alert("Thank You");
        break;
    }
    else {
        alert("invalid option");
    }
}