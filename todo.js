const list = [];
let command = prompt("What would you like to do?");
while (command !== "quit") {
    if (command === "new") {
        let newItem = prompt("What would you like to add to your list?");
        list.push(newItem);
        console.log(`${newItem} has been added.`);
    }
    else if (command === "list") {
        console.log("-----------------");
        for (let listItem of list) {
            console.log(`${list.indexOf(listItem) + 1}: ${listItem}`);
        }
        console.log("-----------------");
    }
    else if (command === "delete") {
        deleteIndex = prompt("Please enter the number of the item you would like to delete?") - 1;
        list.splice(deleteIndex, 1);
    }
    else {
        console.log("Please enter a valid command.");
    }
    command = prompt("What would you like to do?");
}
console.log("You've exited the app!");

// feed back and extraneous cases 