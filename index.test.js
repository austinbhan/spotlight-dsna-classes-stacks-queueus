const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  // add more tests here...
});

const { Queue } = require("./index");
describe("Queue Class", () => {
  it("#enqueue adds item to back of array", () => {
    const queue = new Queue();
    queue.enqueue("fox");
    expect(queue.count).toBe(1);
    expect(queue.next).toBe("fox");
  });
});
