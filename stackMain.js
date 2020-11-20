let utility = require("./Util.js");
let readlineSync = require('readline-sync');

userChoice = function () {
    let isTerminated = true;
    while (isTerminated == true) {
        let choice = readlineSync.question("\nEner your choice:\n1.push\n2.pop\n3.ShowStack\n4.exit\n");
        switch (choice.trim()) {
            case '1': let newValue = readlineSync.question("Enter push Integer:");
                utility.push(newValue);
                break;
            case '2': utility.popElement();
                break;
            case '3': utility.showStack();
                break;    
            case '4': isTerminated = false;
                break;
            default: console.log("Invalid input");
        }
    }
}
userChoice();
