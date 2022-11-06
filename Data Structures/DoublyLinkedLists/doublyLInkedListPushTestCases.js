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
}
