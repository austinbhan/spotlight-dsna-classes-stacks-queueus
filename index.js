class Stack {}

class Queue {
    // Elements Needed: First inline person, check if somebody is in line behind -> function to the queue.
    // One property = array. Native functions are in queue takes an item, dequeue, n-queue 
    // Which takes an item and pushes it into a new array in last position.  
    // dequeue will remove an item from the array (using a shift function, will remove first item)
    // need a function that checks, if an item is at spot[1] of the array, then hasNext = true
    // otherwise false
    constructor(queue) {
        this.queue = queue;
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue(item) {
        this.queue.shift(item);
    }
    hasNext(item) {
        if (this.queue.length > 0) {
            return true
        } else {
            return false
        }
    }

    get readableList() {
        return this.exampleQueue;
    }
    peek(item) {
        return item[0]
    }

}
const exampleQueue = Queue(['Cat','Dog', 'Hamster']);
console.log(exampleQueue.length);

module.exports = { Stack, Queue };
