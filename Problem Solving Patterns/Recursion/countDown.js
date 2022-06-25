// Write a function called countDown
// Input is a positive integer called num
// Console log all all numbers from num to 1 in decrementing order

// E.g. countDown(3) will console.log 3, 2 and then 1
// E.g. countDown(5) will console.log 5, 4, 3, 2 and then 1

const countDown = (num) => {
	if (num === 0) return;
	console.log(num);
	countDown(num - 1);
};

countDown(3);
countDown(5);
countDown(10);
