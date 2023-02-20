/*

232. Implement Queue using Stacks

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.
    Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.


Example 1:

Input:
    ["MyQueue", "push", "push", "peek", "pop", "empty"]
    [[], [1], [2], [], [], []]

Output: [null, null, null, 1, 1, false]

Explanation
    MyQueue myQueue = new MyQueue();
    myQueue.push(1); // queue is: [1]
    myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
    myQueue.peek(); // return 1
    myQueue.pop(); // return 1, queue is [2]
    myQueue.empty(); // return false

Constraints:
    1 <= x <= 9
    At most 100 calls will be made to push, pop, peek, and empty.
    All the calls to pop and peek are valid.

Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

*/

class Stack {
	constructor() {
		this.stack = [];
	}

	push(val) {
		this.stack.push(val);
	}

	pop() {
		return this.stack.pop();
	}

	peek() {
		return this.stack[this.stack.length - 1];
	}

	isEmpty() {
		return this.stack.length === 0;
	}

	size() {
		return this.stack.length;
	}
}

class MyQueue {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
	}

	push(val) {
		this.stack1.push(val);
	}

	pop() {
		this._moveFromS1ToS2();
		const removed = this.stack2.pop();
		this._resetFromS2ToS1();
		return removed;
	}

	peek() {
		this._moveFromS1ToS2();
		const frontElement = this.stack2.peek();
		this._resetFromS2ToS1();
		return frontElement;
	}

	empty() {
		return this.stack1.isEmpty();
	}

	_moveFromS1ToS2() {
		while (!this.stack1.isEmpty()) {
			this.stack2.push(this.stack1.pop());
		}
	}

	_resetFromS2ToS1() {
		while (!this.stack2.isEmpty()) {
			this.stack1.push(this.stack2.pop());
		}
	}
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
