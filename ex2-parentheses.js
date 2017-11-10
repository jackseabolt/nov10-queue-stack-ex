'use strict';

function createNode(data = null, next = null) {
  return {
    data,
    next
  };
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = createNode(data);
      return this.top;
    }
    const node = createNode(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function display(stack) {
  let node = stack.top;
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

function matchingParentheses(string) {
  let myStack = new Stack();
  for (let i=string.length; i>=0; i--) {
    myStack.push(string[i]);
  }
  let openingParenCount = 0;
  let closingParenCount = 0;
  let index = 0;
  let current = myStack.top;
  let lastOpen;
  display(myStack);
  while (current) {
    if (current.data === '(') {
      lastOpen = index;
      openingParenCount++;
    }
    if (current.data === ')') {
      closingParenCount++;
      if (closingParenCount > openingParenCount) {
        return `Error! Extra closing parenthesis at ${index}` ;
      }
    }
    current = current.next;
    index++;
  }

  if (openingParenCount !== closingParenCount) {
    return `Error! Extra opening parenthesis at ${lastOpen}`;
  }
  else {
    return true;
  }
}

console.log(matchingParentheses('()(yoyoyoyo)(()'));