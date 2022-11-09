class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	isEmpty = () => this.size === 0;
	hasOneNode = () => this.size === 1;

	enqueue(value) {
		let newNode = new Node(value);

		if (this.isEmpty()) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		return ++this.size;
	}
}
