//---------------------------------Stack--------------------------------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(num) {
    if (!num) {
      this.num = 10;
    }
    if (!Number.isFinite(num) || num < 0) {
      throw new Error("Invalid limit value");
    } else {
      this.num = num;
    }
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(element) {
    let node = new Node(element);
    if (this.size === this.num) {
      throw new Error("Limit exceeded");
    }
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;

    return this.size;
  }
  pop() {
    if (this.size === 0) {
      throw new Error("Empty stack");
    }
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  peek() {
    if (this.size === 0) {
      return null;
    }
    return this.first.value;
  }
  isEmpty() {
    if (this.size === 0) {
      return true;
    }
    return false;
  }
  toArray() {
    let newArray = [];
    if (this.size === 0) {
      return newArray;
    }
    let currentNode = this.first;
    while (currentNode) {
      newArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return newArray;
  }
  static fromIterable(iterable) {
    if (!iterable || !typeof iterable[Symbol.iterator] === "function") {
      throw new Error("Not iterable");
    }
    const stack = new Stack(iterable.length);
    for (let element of iterable) {
      stack.push(element);
    }
    return stack;
  }
}

//------------------------------LinkedList------------------------

class NodeList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  append(elem) {
    let newNode = new NodeList(elem);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last = newNode;
      this.last.next = newNode;
    }
    this.size++;
    return this.size;
  }
  prepend(elem) {
    let newNode = new NodeList(elem);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }
  find(elem) {
    let currentNode = this.first;
    while (currentNode) {
      if (currentNode.value === elem) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  toArray() {
    let newArray = [];
    if (this.size === 0) {
      return newArray;
    }
    let currentNode = this.first;
    while (currentNode) {
      newArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return newArray;
  }
  static fromIterable() {
    if (!iterable || !typeof iterable[Symbol.iterator] === "function") {
      throw new Error("Not iterable");
    }
    const list = new LinkedList();
    for (let element of iterable) {
      list.prepend(element);
    }
    return list;
  }
}
