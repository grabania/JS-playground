//Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
	//this is the function body(or block)
	console.log('Running Calculate Bill!!');
	const total = billAmount + billAmount * taxRate + billAmount * tipRate;
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

// const greeting = sayHiTo('Me');
// console.log(greeting);

const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);

function doctorize(name) {
	return `Dr. ${name}`;
}

function yell(name) {
	return `Hey ${name.toUpperCase()}`;
}

// yell(doctorize('Paul'));

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
