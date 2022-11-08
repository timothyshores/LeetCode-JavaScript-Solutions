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
		if (this.isEmpty() || index == this.length) {
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
			let nextNode = this.get(index);

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
}

// All test cases return true
const insertTest = new DoublyLinkedList();

// Create new head node with value 1
console.log(insertTest.insert(0, 1));
console.log(insertTest.length === 1); // true
console.log(insertTest.head.val == 1); // true

// Create new head node with value 0
// 0 <-> 1
console.log(insertTest.insert(0, 0));
console.log(insertTest.head.val === 0); // true
console.log(insertTest.head.next.val === 1); // true
console.log(insertTest.tail.prev.val === 0); // true
console.log(insertTest.tail.val === 1); // true
console.log(insertTest.length === 2); // true

// Create new tail node with value 2
// 0 <-> 1 <-> 2
console.log(insertTest.insert(2, 2));
console.log(insertTest.tail.val === 2); // true
console.log(insertTest.head.val === 0); // true
console.log(insertTest.head.next.val === 1); // true
console.log(insertTest.tail.prev.val === 1); // true
console.log(insertTest.tail.val === 2); // true
console.log(insertTest.length === 3); // true

// Create node with value 100 after the head node
// 0 <-> 100 <-> 1 <-> 2
console.log(insertTest.insert(1, 100));
console.log(insertTest.head.val === 0); // true
console.log(insertTest.head.next.val == 100); // true
console.log(insertTest.head.next.next.val === 1); // true
console.log(insertTest.head.next.next.prev.val == 100); // true
console.log(insertTest.tail.prev.prev.val === 100); // true
console.log(insertTest.tail.prev.val === 1); // true
console.log(insertTest.tail.val === 2); // true
console.log(insertTest.length === 4); // true

// Create node with value 5 after the head node
// 0 <-> 100 <-> 1  <-> 5 <-> 2
console.log(insertTest.insert(3, 5));
console.log(insertTest.head.val === 0); // true
console.log(insertTest.head.next.val === 100); // true
console.log(insertTest.head.next.next.val === 1); // true
console.log(insertTest.head.next.next.next.val === 5); // true
console.log(insertTest.head.next.next.next.next.val === 2); // true
console.log(insertTest.tail.prev.prev.prev.prev.val === 0); // true
console.log(insertTest.tail.prev.prev.prev.val === 100); // true
console.log(insertTest.tail.prev.prev.val === 1); // true
console.log(insertTest.tail.prev.val === 5); // true
console.log(insertTest.tail.val === 2); // true
