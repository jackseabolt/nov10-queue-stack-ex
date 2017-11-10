function createQueueNode(data = null, next = null) {
    return {
      data,
      next
    };
   }
   
   class Queue {
    constructor() {
      this.last=null;
      this.first=null;
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
   

// --------------------------------------- //


let manQueue = new Queue(); 
let womanQueue = new Queue(); 

function ourFunc(gender, name) {
    if(gender === 'm') {
        if(womanQueue.first) {
            womanPair = womanQueue.dequeue();
            return `Man, ${name} was paired with lady, ${womanPair}`
        }
        manQueue.enqueue(name); 
        return "No women available, added to man waiting list"
    }
    if(gender === 'f') {
        if(manQueue.first) {
            manPair = manQueue.dequeue(); 
            return `Lady, ${name} was paired with man, ${manPair}`
        }
        womanQueue.enqueue(name)
        return "No men available, added to woman waiting list"
    }
}

console.log("---------")
console.log(ourFunc('f', 'Jackie')); 
console.log(ourFunc('m', 'Bob')); 
console.log(ourFunc('m', 'David'));
console.log(ourFunc('f', 'Sandra D')) 
manQueue.display();  