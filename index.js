class Stack {
  constructor(list) {
    this.list = list || [];
  }
  get count() {
    return this.list.length;
  }
  push(newItem) {
    //add a new item to the list
    this.list.push(newItem);
  }
  pop() {
    //removes item from the 'top' of the stack
    return this.list.pop();
  }
  peek() {
    //show the next item to be removed
    return this.list[this.list.length - 1];
  }
}

class Queue {
  // Elements Needed: First inline person, check if somebody is in line behind -> function to the queue.
  // One property = array. Native functions are in queue takes an item, dequeue, n-queue
  // Which takes an item and pushes it into a new array in last position.
  // dequeue will remove an item from the array (using a shift function, will remove first item)
  // need a function that checks, if an item is at spot[1] of the array, then hasNext = true
  // otherwise false
  constructor(queue) {
    this.queue = queue || [];
  }
  enqueue() {
    return this.queue.push();
  }
  dequeue() {
    return this.queue.shift();
  }
  hasNext() {
    if (this.queue.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  get readableList() {
    return this.exampleQueue;
  }
  get count() {
    return this.queue.length;
  }
}
// const exampleQueue = new Queue(["cat", "dog"]);
// console.log(exampleQueue.queue.enqueue());
// console.log(exampleQueue);
// console.log(exampleQueue.queue.length); returns 2

module.exports = { Stack, Queue };
