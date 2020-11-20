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
    popElement = () => {
        if (this.count == 0) {
            console.log(`stack empty`);
        }
        else {
            // let deleteElement = this.elements[this.count - 1];
            let deleteElement = this.elements.pop();
            console.log(`Deleted item is ${deleteElement}`);
            this.count-- ;
            return this.count;
        }
    }


}
module.exports = new Stack();
//position and values