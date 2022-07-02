/**
 * @classdesc Node
 *
 * @name Node
 * @class
 */
class Node {
	/**
	 * Create a new Node that stores the value passed into the constructor
	 *
	 * @constructs Node
	 * @param {any} value will be stored in the node in the tail of the Singly Linked List
	 */
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

/**
 * @classdesc Singly Linked List
 *
 * @name SinglyLinkedList
 * @class
 */
class SinglyLinkedList {
	/**
	 * Create a new Singly Linked List
	 *
	 * @constructs SinglyLinkedList
	 */
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	/**
	 * Returns true if the Linked List is empty or false if the Linked List has one or more nodes
	 *
	 * @returns {boolean} returns true if the Linked List is empty or false if the Linked List has one or more nodes
	 */
	isEmpty() {
		return this.length === 0;
	}

	/**
	 * Add a new Node at the end of the Singly Linked List
	 *
	 * @param {any} value will be stored in the node in the tail of the Singly Linked List
	 * @return Updated Singly Linked List with value store in the new tail Node of the Singly Linked List
	 */
	push(value) {
		// Create newNode with value passed into push method
		let newNode = new Node(value);
		// If Singly Linked List is empty then set head and tail to newNode
		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// Singly Linked List is NOT empty and has one or more node
			// Point current tail.next to newNode and update tail to newNode
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
}

// All Test Cases Return true
let sll = new SinglyLinkedList();
console.log(sll.length == 0);
console.log(sll.head == null);
console.log(sll.tail == null);

console.log(sll.push("1"));
console.log(sll.length === 1);
console.log("head", sll.head.value == 1);
console.log("tail", sll.tail.value == 1);
console.log("tail", sll.tail.next == null);

console.log(sll.push("2"));
console.log(sll.length === 2);
console.log(sll.head.value == 1);
console.log(sll.tail.value == 2);
console.log(sll.tail.next == null);
console.log(sll.head.next.value == 2);
console.log(sll.head.next.next == null);

console.log(sll.push("3"));
console.log(sll.length === 3);
console.log(sll.head.value == 1);
console.log(sll.tail.value == 3);
console.log(sll.tail.next == null);
console.log(sll.head.next.value == 2);
console.log(sll.head.next.next.value == 3);
console.log(sll.head.next.next.next === null);
