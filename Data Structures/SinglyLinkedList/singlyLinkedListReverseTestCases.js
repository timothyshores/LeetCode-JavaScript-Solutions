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

	/**
	 * Add new head node to the Singly Linked List
	 *
	 * @param {any} value will be stored in the new head node in the Singly Linked List
	 * @return the Singly Linked List
	 */
	unshift(value) {
		// Create newHead node with value passed into unshift method
		const newHead = new Node(value);

		// If Singly Linked List is empty return set head and tail to newHead
		if (this.isEmpty()) {
			this.head = newHead;
			this.tail = newHead;
		}
		// Else set newHead to point to current head and update head to newHead
		if (this.hasOneNode() || this.hasMultipleNodes()) {
			newHead.next = this.head;
			this.head = newHead;
		}

		// Increment length and return the Singly Linked List
		this.length++;
		return this;
	}

	/**
	 * Get a node in the Singly Linked List given an index
	 *
	 * @param {number} index of the specified node
	 * @return node at position index in the Singly Linked List
	 */
	get(index) {
		// If Singly Linked List is empty return undefined
		if (this.isEmpty()) return undefined;

		// If index is less than 0 or greater than or equal to the Singly Linked List length return null
		if (index < 0 || index >= this.length) return null;

		// If Singly Linked List is NOT empty return the node at the given index
		let nodeAtIndex = this.head;
		for (let i = 0; i < index; i++) {
			nodeAtIndex = nodeAtIndex.next;
		}

		return nodeAtIndex;
	}

	/**
	 * Set a specific node's value in the Singly Linked List
	 *
	 * @param {number} index of the specified node
	 * @param {any} value to be set at the specified node
	 * @return {boolean} returns true if a node was found and its value was updated
	 */
	set(index, value) {
		// Create variable node and set it to the node at index passed into set method
		const setNode = this.get(index);

		// If a node is found at the index passed into the set method set value and return true
		if (setNode) {
			setNode.value = value;
			return true;
		}

		// When node was NOT found at at the index passed into the set method return false
		return false;
	}

	/**
	 * Insert a new node with the value passed into the insert method at the specified index
	 *
	 * @param {number} index of the new node to be inserted into
	 * @param {any} value of the new node
	 * @return {boolean} returns true if a node was found and its value was updated
	 */
	insert(index, value) {
		// If index is less than 0 or greater than the Singly Linked List length return false
		if (index < 0 || index > this.length) return false;

		// If index is 0 call unshift and push new node to the head and return true
		if (index === 0) return !!this.unshift(value);

		// If index is equal to length of the Singly Linked List push new node to the tail and return true
		if (index === this.length) return !!this.push(value);

		// Create newNode node with value passed into insert method
		const newNode = new Node(value);

		// Create variable previousNode and set it to the previous node before newNode
		const previousNode = this.get(index - 1);

		// Create variable nextNode and set it to the following node after previousNode
		const nextNode = previousNode.next;

		// Point previousNode to newNode, point newNode to nextNode, increment length and return true
		previousNode.next = newNode;
		newNode.next = nextNode;
		this.length++;
		return true;
	}

	/**
	 * Remove a node at a specific index in the Singly Linked List
	 *
	 * @param {number} index of the node to be removed
	 * @return the removed node
	 */
	remove(index) {
		// If index is less than 0 or greater than or equal to the Singly Linked List length return undefined
		if (index < 0 || index >= this.length) return undefined;

		// If index is 0 call shift method and remove the head node
		if (index === 0) return this.shift();

		// If index is the Singly Linked List's length - 1 call pop method and remove the tail node
		if (index === this.length - 1) return this.pop();

		// Create variable previousNode and set it to the previous node before removedNode
		const previousNode = this.get(index - 1);

		// Create variable removedNode and set it to the next node after previousNode
		const removedNode = previousNode.next;

		// Create variable nextNode and set it to the next node after removedNode
		const nextNode = removedNode.next;

		// Point previous node to nextNode, decrement length and return the removed node
		previousNode.next = nextNode;
		this.length--;
		return removedNode;
	}

	/**
	 * Reverse the Singly Linked List in placed
	 *
	 * @return the SLL reversed in place
	 */
	reverse() {
		// Scenario 1: SLL is empty
		if (this.isEmpty()) return "SLL is empty";

		//Scenario 2: SLL has only one node
		if (this.hasOneNode()) return this;

		//Scenario 2: SLL has two nodes
		if (this.length === 2) {
			const originalHead = this.head;
			const originalTail = this.tail;
			this.tail = originalHead;
			this.tail.next = null;

			this.head = originalTail;
			this.head.next = this.tail;
			return this;
		}

		// Keep track of previous, current and next nodes
		let previous = this.head;
		let current = previous.next;
		let next = current.next;

		// Swap the original head and tail
		const originalHead = this.head;
		const originalTail = this.tail;
		this.head = originalTail;
		this.tail = originalHead;
		this.tail.next = null;

		// might need to change this
		while (previous != this.head) {
			current.next = previous;

			previous = current;
			current = next;
			if (next.next) next = next.next;
		}

		return this;
	}
}

const empty = new SinglyLinkedList();
console.log(empty);
console.log(empty.reverse());

const oneNode = new SinglyLinkedList();
oneNode.push("1");
console.log(oneNode.reverse());

const twoNode = new SinglyLinkedList();
twoNode.push("1");
twoNode.push("2");
console.log(twoNode);
console.log(twoNode.head.value == 1); // true
console.log(twoNode.head.next.value == 2); // true
console.log(twoNode.reverse());
console.log(twoNode.head.value == 2); // true
console.log(twoNode.head.next.value == 1); // true
console.log(twoNode.tail.value == 1); // true
console.log(twoNode.tail.next == null); // true

const threeNode = new SinglyLinkedList();
threeNode.push("1");
threeNode.push("2");
threeNode.push("3");

console.log(threeNode.head.value == 1); // true
console.log(threeNode.head.next.value == 2); // true
console.log(threeNode.head.next.next.value == 3); // true
console.log(threeNode.tail.value == 3); // true
console.log(threeNode.tail.next == null); // true

console.log(threeNode.reverse());
console.log(threeNode.head.value == 3); // true
console.log(threeNode.head.next.value == 2); // true
console.log(threeNode.head.next.next.value == 1); // true
console.log(threeNode.tail.value == 1); // true
console.log(threeNode.tail.next == null); // true

let fourNode = new SinglyLinkedList();
fourNode.push("1");
fourNode.push("2");
fourNode.push("3");
fourNode.push("4");

console.log(fourNode.reverse());
console.log(fourNode.head.value == 4); // true
console.log(fourNode.head.next.value == 3); // true
console.log(fourNode.head.next.next.value == 2); // true
console.log(fourNode.head.next.next.next.value == 1); // true
console.log(fourNode.tail.value == 1); // true
console.log(fourNode.tail.next == null); // true
