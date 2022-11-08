class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	isEmpty = () => this.size === 0;

	hasOneNode = () => this.size === 1;

	push(value) {
		let newNode = new Node(value);

		if (this.isEmpty()) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}

		return ++this.size;
	}

	pop() {
		if (this.isEmpty()) return null;

		let firstNode = this.first;

		if (this.hasOneNode()) {
			this.first = null;
			this.last = null;
		} else {
			this.first = firstNode.next;
		}

		this.size--;
		return firstNode.value;
	}
}
