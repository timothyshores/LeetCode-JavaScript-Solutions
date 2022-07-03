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

	/**
	 * Remove the tail of the Singly Linked List
	 *
	 * @return the tail of the Singly Linked List
	 */
	pop() {
		switch (true) {
			// Singly Linked List has no nodes return undefined
			case this.isEmpty():
				return undefined;
			// Singly Linked List has exactly one node
			case this.hasOneNode(): {
				// Return the node, set head and tail to null and decrement the length
				let removedNode = this.head;
				this.head = null;
				this.tail = null;
				this.length--;
				return removedNode;
			}
			// Singly Linked List has two or more nodes
			case this.hasMultipleNodes(): {
				// Create newTail variable and set to head
				let newTail = this.head;
				// Traverse the Singly Linked List from head to the last node before the tail
				for (let i = 0; i < this.length - 2; i++) {
					newTail = newTail.next;
				}
				// Create temp variable to return the current tail
				let removedNode = this.tail;
				// Set the second to the last node's pointer to null
				newTail.next = null;
				// Set the new tail to the second to the last node
				this.tail = newTail;
				// Decrement the length of the Singly Linked List
				this.length--;
				// Return the original tail node
				return removedNode;
			}
		}
	}

	/**
	 * Remove the head of the Singly Linked List
	 *
	 * @return the head of the Singly Linked List
	 */
	shift() {
		// If Singly Linked List is empty return undefined
		if (this.isEmpty()) return undefined;
		// Singly Linked List is NOT empty set new head to head.next, decrement length and return original head
		const originalHead = this.head;
		this.head = originalHead.next;
		this.length--;
		return originalHead;
	}
}
