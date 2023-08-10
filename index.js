function createNode(value, nextNode) {
  return { value, nextNode };
}

const linkedListPrototype = {
  head() {
    return this;
  },

  tail() {
    console.log("Tail of list");
  },

  append(value) {
    let currentNode = this;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    const lastNode = currentNode;
    lastNode.nextNode = createNode(value, null);
  },

  prepend(value) {
    console.log("Add value to start of list");
  },

  size() {
    console.log("Size of List");
  },

  at(index) {
    console.log("Return node at index");
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
  let linkedList;
  let previousNode;
  let currentNode;

  array.forEach((element, index) => {
    if (index === 0) {
      linkedList = createNode(element, null);
      Object.setPrototypeOf(linkedList, linkedListPrototype);
      currentNode = linkedList;
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
