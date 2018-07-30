'use strict';
////we need to make find from scratch 
const _Node = require('./nodes.js');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
      
    }
    else{
      
      let tempNode = this.head;
      
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item){
    let currNode = this.head;

    if(!this.head){
      return null;
    }
    while(currNode.value !== item) {

      if(currNode.next === null){
        return null;
      }
      else{
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item){
    //if the list is empty
    if (!this.head){
      return null;
    }
    //if the node to be removed is head, make the next node head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;
   
    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, key){
    // if head = key then replace this value
    let currNode = this.head;
    let previousNode = this.head;
    if(this.head.value === key){
      return this.insertFirst(item);
    }
      
    while(currNode !== null && currNode.value !== key){
      previousNode = currNode;
      currNode = currNode.next;
      
    }if (currNode === null){
      console.log('never found key');
      return false; 
    }
    previousNode.next = new _Node(item,currNode);
    return true;
  }

  insertAfter(item, key){
      
    let currNode = this.head;
    //   if(this.head.value === key){
    //       return this.insertFirst(item);
    //   }
    while(currNode !== null && currNode.value !== key){
      currNode = currNode.next;
    }
      
    if (currNode === null){
      console.log('never found a key');
      return false;
    }
    currNode.next = new _Node(item,currNode.next);
    return true;
  }
  
  // insertAt(item, key){
  //   let foundkey = find(key);
  //   let currNode = this.head;
    

  //   while(currNode !== foundkey){
      
  //   }

  // }

  size(){
    let currenthead = this.head;
    let increment = 0;


    while(currenthead !== null){
      increment = increment + 1;
      currenthead = currenthead.next;
      console.log(`${increment}`);
    } 
    return increment;
  }


}

module.exports = LinkedList;