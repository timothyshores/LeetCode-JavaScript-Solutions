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
}

// All Test Cases Return true
let popTests = new DoublyLinkedList();

// Pop an empty DLL returns undefined
console.log(popTests.pop() == undefined);

// Push the value 1 into the empty DLL
console.log(popTests.push("1"));
console.log(popTests);
console.log(popTests.head.val == 1);
console.log(popTests.tail.val == 1);

// Pop the tail and verify that it returns 1, head and tail are null and length is 0
console.log(popTests.pop().val == 1);
console.log(popTests.head === null);
console.log(popTests.tail === null);
console.log(popTests.length === 0);

// Push values 1 and then 2 into the DLL
console.log(popTests.push("1"));
console.log(popTests.push("2"));
console.log(popTests.head.val == 1);
console.log(popTests.tail.val == 2);
console.log(popTests.tail.next == null);
console.log(popTests.tail.prev.val == 1);
console.log(popTests.head.next.val == 2);

// Pop off the tail, verify it returns 2, verify both head and tail value is 1 and length is 1
console.log(popTests.pop().val == 2);
console.log(popTests.head.val == 1);
console.log(popTests.tail.val == 1);
console.log(popTests.length === 1);
