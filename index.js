const linkedListPrototype = {
  append(value) {
    console.log("Add value to end of list");
  },

  prepend(value) {
    console.log("Add value to start of list");
  },

  size: 0,

  head: console.log("Head of list"),

  tail: console.log("Tail of list"),

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

function createNode(value, nextNode) {
  return { value, nextNode };
}

function createLinkedList(array) {
  let linkedList;
  let previousNode;
  let currentNode;

  array.forEach((element, index) => {
    if (index === 0) {
      linkedList = createNode(element, null);
      currentNode = linkedList;
      return;
    }

    previousNode = currentNode;
    currentNode = createNode(element, null);
    previousNode.nextNode = currentNode;
  });

  return linkedList;
}

console.log(createLinkedList([1, 3, 5, 7]));
