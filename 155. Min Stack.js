/*

155. Min Stack


Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example 1:

Input
    ["MinStack","push","push","push","getMin","pop","top","getMin"]
    [[],[-2],[0],[-3],[],[],[],[]]

Output
    [null,null,null,null,-3,null,0,-2]

Explanation
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin(); // return -3
    minStack.pop();
    minStack.top();    // return 0
    minStack.getMin(); // return -2

Constraints:
- 231 <= val <= 231 - 1
- Methods pop, top and getMin operations will always be called on non-empty stacks.
- At most 3 * 104 calls will be made to push, pop, top, and getMin.

*/

class MinStack {
	constructor() {
		this.stack = [];
	}

	push(val) {
		this.stack.push({
			value: val,
			// if stack is empty set min to the first value being pushed into the stack
			// when stack is NOT empty set new min to either the new value being pushed onto the stack or the previous min which ever is smaller
			min: this.stack.length === 0 ? val : Math.min(val, this.getMin()),
		});
	}

	pop() {
		return this.stack.pop();
	}

	top() {
		return this.stack[this.stack.length - 1].value;
	}

	getMin() {
		return this.stack[this.stack.length - 1].min;
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
