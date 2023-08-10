function createNode(value, nextNode) {
  return { value, nextNode };
}

const linkedListPrototype = {
  head() {
    return this.firstNode;
  },

  tail() {
    let currentNode = this.firstNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    const lastNode = currentNode;
    return lastNode;
  },

  append(value) {
    let currentNode = this.firstNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    const lastNode = currentNode;
    lastNode.nextNode = createNode(value, null);
  },

  prepend(value) {
    const firstNode = this.head();
    const newNode = createNode(value, firstNode);
    this.firstNode = newNode;
  },

  size() {
    let currentNode = this.head();
    let listSize = 0;
    if (currentNode === null) {
      return listSize;
    }
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      listSize += 1;
    }

    listSize += 1;
    return listSize;
  },

  at(index) {
    if (index < 0) {
      return Error("Negative index entered");
    }
    let currentNode = this.head();
    for (let i = 0; i < index; i += 1) {
      if (currentNode.nextNode === null) {
        return Error("Index is too big for this list");
      }
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  },

  pop() {
    console.log("Remove last node");
  },

  contains(value) {
    console.log("Return true if value is in the list");
  },

  find(value) {
    console.log("Return the index of the node containing value, or null");
  },

  toString() {
    console.log("Print list as a string");
  },
};

function createLinkedList(array) {
  const linkedList = { firstNode: null };
  let previousNode;
  let currentNode;

  array.forEach((element, index) => {
    if (index === 0) {
      currentNode = createNode(element, null);
      linkedList.firstNode = currentNode;
      Object.setPrototypeOf(linkedList, linkedListPrototype);
      return;
    }

    previousNode = currentNode;
    currentNode = createNode(element, null);
    previousNode.nextNode = currentNode;
  });

  return linkedList;
}

const testList = createLinkedList([1, 3, 5, 7]);

console.log(testList);

testList.append("Ha!");

testList.prepend("New first");

console.log(testList.at(6));
