// const List = require("./linkedList");

// const newList = new List();

// newList.push(1);
// newList.push(2);

// console.log(newList);

const Stack = require(`./stack`);

const newStack = new Stack();

newStack.push(`first`);
newStack.push(`second`);
newStack.push(`last`);
newStack.push(`fourth`);

console.log(newStack.pop());
console.log(newStack);
