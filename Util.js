class Stack {
    constructor() {
        this.elements = [];
        this.count = 0;
    }
    /**
     * @description adding elements to stack
     */
    push = (newElements) => {
        // this.elements[this.count] = newElements;
        this.elements.push(newElements);
        console.log(`For position ${this.count} Stack: ${newElements} `);
        this.count++;
        // return this.count +1;
    }
    //to pop elements
    popElement = () => {
        if (this.count == 0) {
            console.log(`stack empty`);
        }
        else {
            // let deleteElement = this.elements[this.count - 1];
            let deleteElement = this.elements.pop();
            console.log(`Deleted item is ${deleteElement}`);
            this.count--;
            return this.count;
        }
    }
    //to print all stack elements
    showStack = () => {
        if (this.count == 0) {
            console.log("Stack is empty!");
        }
        else {
            let iter = this.count;
            for (; iter > 0; iter--) {
                let nextElement = this.elements[iter - 1];
                console.log(`For position ${iter} Stack: ${nextElement} `);
            }
        }
    }


}
module.exports = new Stack();
