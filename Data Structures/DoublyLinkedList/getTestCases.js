class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	/**
	 * Returns true if the Doubly Linked List (DLL) is empty
	 *
	 * @returns {boolean} returns true if the DLL is empty
	 */
	isEmpty() {
		return this.length === 0;
	}

	/**
	 * Returns true if the Doubly Linked List has exactly one node
	 *
	 * @returns {boolean} returns true if the DLL has exactly one node
	 */
	hasOneNode() {
		return this.length === 1;
	}

	/**
	 * Returns true if the Doubly Linked List (DLL) has two or more nodes
	 *
	 * @returns {boolean} returns true if the DLL has two or more nodes
	 */
	hasMultipleNodes() {
		return this.length >= 2;
	}

	/**
	 * Add a new Node at the end of the DLL
	 *
	 * @param {any} value will be stored in the node in the tail of the DLL
	 * @return Updated DLL with value store in the new tail Node of the DLL
	 */
	push(value) {
		let newNode = new Node(value);

		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	/**
	 * Remove the tail node from the DLL
	 *
	 * @return The removed tail node
	 */
	pop() {
		// If DLL is empty return undefined
		if (this.isEmpty()) return undefined;

		const originalTail = this.tail;

		if (this.hasOneNode()) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = originalTail.prev;
			this.tail.next = null;
			originalTail.prev = null;
		}

		this.length--;
		return originalTail;
	}

	/**
	 * Remove the head node from the DLL
	 *
	 * @return The original head node from the DLL
	 */
	shift() {
		if (this.isEmpty()) return undefined;

		const originalHead = this.head;

		if (this.hasOneNode()) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = originalHead.next;
			this.head.prev = null;
			originalHead.next = null;
		}

		this.length--;
		return originalHead;
	}

	/**
	 * Add a new head node to the DLL
	 *
	 * @param {any} value to be stored in the new head node in the  DLL
	 * @return The original head node from the DLL
	 */
	unshift(value) {
		const newHead = new Node(value);

		if (this.isEmpty()) {
			this.head = newHead;
			this.tail = newHead;
		} else {
			newHead.next = this.head;
			this.head.prev = newHead;
			this.head = newHead;
		}

		this.length++;
		return this;
	}

	/**
	 * Return the value of the node at the given index
	 *
	 * @param {any} index of the node in the DLL
	 * @return The node at the given index in the DLL
	 */
	get(index) {
		if (index < 0 || index >= this.length) return null;

		let node;

		if (index <= this.length / 2) {
			node = this.head;

			for (let i = 0; i < index; i++) {
				node = node.next;
			}
		}

		if (index > this.length / 2) {
			node = this.tail;

			for (let i = this.length - 1; i > index; i--) {
				node = node.prev;
			}
		}

		return node;
	}
}

// All test cases return true
const getTest = new DoublyLinkedList();

// Calling get with negative, zero and positive indices in an empty DLL returns null
console.log(getTest.get(-1) === null);
console.log(getTest.get(-10) === null);
console.log(getTest.get(0) === null);
console.log(getTest.get(1) === null);
console.log(getTest.get(10) === null);

// Push the numbers 1 through 5 into the DLL
getTest.push(1);
getTest.push(2);
getTest.push(3);
getTest.push(4);
getTest.push(5);

// Call get on indices 0 to 4 returns true
console.log(getTest.get(0).val === 1);
console.log(getTest.get(1).val === 2);
console.log(getTest.get(2).val === 3);
console.log(getTest.get(3).val === 4);
console.log(getTest.get(4).val === 5);

// Call get with out of range indices returns null
console.log(getTest.get(5) === null);
console.log(getTest.get(6) === null);
console.log(getTest.get(10) === null);
console.log(getTest.get(-1) === null);
console.log(getTest.get(-2) === null);
console.log(getTest.get(-10) === null);
