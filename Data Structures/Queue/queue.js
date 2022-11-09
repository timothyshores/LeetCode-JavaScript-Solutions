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

// All test cases return true
const queue = new Queue();

console.log(queue.first === null); // true
console.log(queue.last === null); // true
console.log(queue.size === 0); // true

console.log(queue.enqueue(1) === 1); // true
console.log(queue.first.value === 1); // true
console.log(queue.last.value === 1); // true
console.log(queue.size === 1); // true

console.log(queue.enqueue(2) === 2); // true
console.log(queue.first.next.value === 2); // true
console.log(queue.last.value === 2); // true
console.log(queue.size === 2); // true

console.log(queue.enqueue(3) === 3); // true
console.log(queue.first.next.next.value === 3); // true
console.log(queue.last.value === 3); // true
console.log(queue.size === 3); // true
