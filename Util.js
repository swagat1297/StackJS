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


}
module.exports = new Stack();
//position and values