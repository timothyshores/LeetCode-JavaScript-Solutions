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

	/**
	 * Updates the value of the node at the given index
	 *
	 * @param {any} index of the node in the DLL
	 * @param {any} value to be set in the given node
	 * @return The node at the given index in the DLL
	 */
	set(index, value) {
		let nodeAtIndex = this.get(index);

		if (nodeAtIndex) {
			nodeAtIndex.val = value;
			return true;
		}

		return false;
	}

	/**
	 * Create a new node and insert it at the given index
	 *
	 * @param {any} index of the node in the DLL
	 * @param {any} value to be set in the given node
	 * @return The node at the given index in the DLL
	 */
	insert(index, value) {
		if (index < 0 || index > this.length) {
			return false;
		} else if (index === this.length) {
			// If DLL is empty set newNode as head and tail
			this.push(value);
		} else if (index === 0) {
			// If index is 0 use unshift to add new head node
			this.unshift(value);
		} else {
			// Create new node with the value passed into the method
			const newNode = new Node(value);

			// Need to get the previous node at the current index
			let prevNode = this.get(index - 1);
			// Also need to get the next node at the current index
			let nextNode = prevNode.next;

			// Set the previous node's .next to the new node
			prevNode.next = newNode;
			// Set the new node's .prev to the previous node
			newNode.prev = prevNode;

			// Set the next node's .prev to the new node
			nextNode.prev = newNode;
			// Set the new node's .next to the next node
			newNode.next = nextNode;

			this.length++;
		}

		return this;
	}

	/**
	 * Remove a node and at a given index
	 *
	 * @param {any} index of the node in the DLL to be removed
	 * @return the removed node
	 */
	remove(index) {
		if (index < 0 || index >= this.length) {
			return false;
		} else if (index === this.length - 1) {
			// Call pop to remove the tail node
			return this.pop();
		} else if (index === 0) {
			// Call pop method to remove the head node
			return this.shift();
		} else {
			// Get the previous node before the node to be removed, node to be removed and the next node
			let prevNode = this.get(index - 1);
			let nodeToBeRemoved = prevNode.next;
			let nextNode = nodeToBeRemoved.next;

			// Set next and previous of the node to be removed to null
			nodeToBeRemoved.prev = null;
			nodeToBeRemoved.next = null;

			// Connect the previous node's .next to the next node after the node to be delete
			prevNode.next = nextNode;

			// Connect the next node's .prev to the previous node before the node to be deleted
			nextNode.prev = prevNode;

			// Decrement the length and return the deleted node
			this.length--;
			return nodeToBeRemoved;
		}
	}
}

// All test cases return true
const removeTest = new DoublyLinkedList();

// Call remove on a node that does not exist in the DLL returns false
console.log(removeTest.remove(0) === false); // true
console.log(removeTest.remove(1) === false); // true
console.log(removeTest.remove(-1) === false); // true
console.log(removeTest.remove(5) === false); // true
console.log(removeTest.remove(-5) === false); // true
console.log(removeTest.remove(10) === false); // true
console.log(removeTest.remove(-10) === false); // true

// Push 1 to the empty DLL and then remove it and check that it returns 1 with length 0
console.log(removeTest.push(1));
console.log(removeTest.remove(0).val === 1); // true
console.log(removeTest.length === 0); // true

// Push 1 then 2 to the empty DLL and then remove the tail
console.log(removeTest.push(1));
console.log(removeTest.push(2));
console.log(removeTest.remove(1).val === 2); // true
console.log(removeTest.head.val === 1); // true
console.log(removeTest.tail.val === 1); // true
console.log(removeTest.head.prev === null); // true
console.log(removeTest.head.next === null); // true
console.log(removeTest.tail.next === null); // true
console.log(removeTest.tail.prev === null); // true
console.log(removeTest.length === 1); // true

// Push 2 and then 3 then remove the middle node
console.log(removeTest.push(2));
console.log(removeTest.push(3));
console.log(removeTest.head.val === 1); // true
console.log(removeTest.tail.val === 3); // true
console.log(removeTest.head.next.val === 2); // true
console.log(removeTest.tail.prev.val === 2); // true
console.log(removeTest.tail.prev.prev.val === 1); // true
console.log(removeTest.head.next.next.val === 3); // true
console.log(removeTest.remove(1).val === 2); // true
console.log(removeTest.head.val === 1); // true
console.log(removeTest.tail.val === 3); // true
console.log(removeTest.head.next.val === 3); // true
console.log(removeTest.tail.prev.val === 1); // true
