//Function Definition
function calculateBill(billAmount, taxRate) {
	//this is the function body(or block)
	console.log('Running Calculate Bill!!');
	const total = billAmount * 1 + taxRate;
	return total;
}

//Function Call or Function Run
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
console.log(myTotal, myTotal2);

function sayHiTo() {
	return;
}

//Function definition
function sayHiTo(firstName) {
	return `Hello ${firstName}`;
}

const greeting = sayHiTo('Me');
console.log(greeting);
