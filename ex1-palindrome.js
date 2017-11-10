function createQueueNode(data = null, prev = null, next = null) {
    return {
      data,
      prev,
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
        newNode.next = this.last;
        this.last.prev = newNode;
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
      this.first = currentFirstNode.prev;
      this.first.next = null;
   
      if (currentFirstNode === this.last) {
        this.last = null;
      }
   
      return currentFirstNode.data;
   
    }
   
    display() {
      let displayNode = this.first;
      while (displayNode) {
        console.log(displayNode.data);
        displayNode = displayNode.prev;
      }
    }
   }
   
   
   function is_palindrome(s) {
       s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
       console.log(s)
       let myQueue = new Queue(); 
       
       for(let i = 0; i < s.length; i++) {
         myQueue.enqueue(s[i])
       }
       
       let first = myQueue.first;  
       let last = myQueue.last; 
       
       while(first) {
         if(first.data !== last.data) {
           return false; 
         }
         first = first.next; 
         last = last.prev; 
       }
       return true; 
   }
   
   // true, true, true
   console.log(is_palindrome("dad"));
   console.log(is_palindrome("A man, a plan, a canal: Panama"));
   console.log(is_palindrome("1001"));
   