//Function Definition
let bill = 100;
const taxRate = 1.13;

function calculateBill() {
	//this is the function body(or block)
	console.log('Running Calculate Bill!!');
	const total = bill * 1 + taxRate;
	return total;
}

//Function Call or Function Run
const myTotal = calculateBill();
bill = 200;
const myTotal2 = calculateBill();
console.log(myTotal, myTotal2);
