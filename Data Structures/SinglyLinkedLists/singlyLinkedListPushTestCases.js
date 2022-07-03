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
	 * Returns true if the Singly Linked List has exactly one node
	 *
	 * @returns {boolean} returns true if the Linked List has exactly one node
	 */
	hasOneNode() {
		return this.length === 1;
	}

	/**
	 * Returns true if the Singly Linked List has two or more nodes
	 *
	 * @returns {boolean} returns true if the Linked List has two or more nodes
	 */
	hasMultipleNodes() {
		return this.length >= 2;
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
		}
		// Singly Linked List has one or more nodes point current tail to newNode and update tail to newNode
		if (this.hasOneNode() || this.hasMultipleNodes()) {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		// Increment length and return the Singly Linked List
		this.length++;
		return this;
	}
}

// All Test Cases Return true
let popTests = new SinglyLinkedList();

let pushTests = new SinglyLinkedList();
console.log(pushTests.length == 0);
console.log(pushTests.head == null);
console.log(pushTests.tail == null);

pushTests.push("1");
console.log(pushTests.length === 1);
console.log(pushTests.head.value == 1);
console.log(pushTests.tail.value == 1);
console.log(pushTests.tail.next == null);

pushTests.push("2");
console.log(pushTests.length === 2);
console.log(pushTests.head.value == 1);
console.log(pushTests.tail.value == 2);
console.log(pushTests.tail.next == null);
console.log(pushTests.head.next.value == 2);
console.log(pushTests.head.next.next == null);

pushTests.push("3");
console.log(pushTests.length === 3);
console.log(pushTests.head.value == 1);
console.log(pushTests.tail.value == 3);
console.log(pushTests.tail.next == null);
console.log(pushTests.head.next.value == 2);
console.log(pushTests.head.next.next.value == 3);
console.log(pushTests.head.next.next.next === null);

pushTests.push("4");
console.log(pushTests.length === 4);
console.log(pushTests.tail.value == 4);
console.log(pushTests.head.value == 1);
console.log(pushTests.tail.next == null);
console.log(pushTests.head.next.value == 2);
console.log(pushTests.head.next.next.value == 3);
console.log(pushTests.head.next.next.next.next === null);
console.log(pushTests.head.next.next.next.value == 4);
