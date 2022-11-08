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
}

// All Test Cases Return true
const DLL = new DoublyLinkedList();

// Pop an empty DLL returns undefined
console.log(DLL.shift() == undefined);

// Push the value 1 into the empty DLL
console.log(DLL.push("1"));

// Pop the head and verify that it returns 1, head and tail are null and length is 0
console.log(DLL.shift().val == 1);
console.log(DLL.head === null);
console.log(DLL.tail === null);
console.log(DLL.length === 0);

// Push values 1, 2 and then 3 into the DLL
console.log(DLL.push("1"));
console.log(DLL.push("2"));
console.log(DLL.push("3"));
console.log(DLL.head.val == 1);
console.log(DLL.tail.val == 3);
console.log(DLL.tail.next == null);
console.log(DLL.tail.prev.val == 2);
console.log(DLL.head.next.val == 2);
console.log(DLL.head.next.next.val == 3);
console.log(DLL.tail.prev.prev.val == 1);

// Call shift on the DLL, verify it returns 1, verify new head is 2 and tail is still 3 with length 2
console.log(DLL.shift().val == 1);
console.log(DLL.head.val == 2);
console.log(DLL.tail.val == 3);
console.log(DLL.length === 2);

// Call shift the DLL again, verify it returns 2, verify new head and tail is 3 and length is 1
console.log(DLL.shift());
console.log(DLL.head.val == 3);
console.log(DLL.tail.val == 3);
console.log(DLL.length === 1);
