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
describe("Queue Class", ()=> {
  it("#push new item to queue", () => {
    const queue = Queue();
    queue.push(1);
    expect(queue.peek())
  });
})