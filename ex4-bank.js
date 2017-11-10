'use strict';

function createQueueNode(data = null, next = null) {
  return {
    data,
    next
  };
}

class Queue {
  constructor() {
    this.last = null;
    this.first = null;
  }

  enqueue(data) {
    const newNode = createQueueNode(data);

    if (this.last) {
      this.last.next = newNode;
    }

    this.last = newNode;

    if (!this.first) {
      this.first = newNode;
    }
  }

  dequeue() {
    if (!this.first) {
      return;
    }

    const currentFirstNode = this.first;
    this.first = currentFirstNode.next;

    if (!this.first) {
      this.last = null;
    }

    return currentFirstNode.data;
  }

  display() {
    let displayNode = this.first;
    while (displayNode) {
      console.log(displayNode.data);
      displayNode = displayNode.next;
    }
  }
}

let bankLine = new Queue();
bankLine.enqueue(Math.random());
bankLine.enqueue(Math.random());
bankLine.enqueue(Math.random());
bankLine.enqueue(Math.random());
bankLine.enqueue(Math.random());

function paperworkCheck() {
  let currentCustomer = bankLine.dequeue();
  if (currentCustomer > 0.25) {
    return console.log('Customer processed!');
  }
  else {
    bankLine.enqueue(currentCustomer);
    return console.log('Customer did not have the proper paperwork.');
  }
}

paperworkCheck();
paperworkCheck();
paperworkCheck();
paperworkCheck();
paperworkCheck();