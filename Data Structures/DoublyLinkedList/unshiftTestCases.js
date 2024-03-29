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
}

// All test cases return true

const unshiftDLL = new DoublyLinkedList();

console.log(unshiftDLL.unshift(3));
console.log(unshiftDLL.hasOneNode()); // true
console.log(unshiftDLL.head.val === 3); // true
console.log(unshiftDLL.tail.val === 3); // true
console.log(unshiftDLL.head.prev === null); // true
console.log(unshiftDLL.tail.next === null);

console.log(unshiftDLL.unshift(2));
console.log(unshiftDLL.hasMultipleNodes()); // true
console.log(unshiftDLL.head.val === 2); // true
console.log(unshiftDLL.tail.val === 3); // true
console.log(unshiftDLL.head.prev === null); //true
console.log(unshiftDLL.head.next.val === 3); // true
console.log(unshiftDLL.tail.next === null); // true

console.log(unshiftDLL.unshift(1)); // true
console.log(unshiftDLL.length === 3); // true
console.log(unshiftDLL.head.val === 1); // true
console.log(unshiftDLL.tail.val === 3); // true
console.log(unshiftDLL.head.next.val === 2); // true
console.log(unshiftDLL.tail.prev.val === 2); // true
