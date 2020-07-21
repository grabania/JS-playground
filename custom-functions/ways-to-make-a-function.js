// function doctorize(firstName) {
// 	return `Dr. ${firstName}`;
// }

//Anon Function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

//Function Expression
// const doctorize = function(firstName) {
// 	return `Dr. ${firstName}`;
// };

// Arrow Function
const inchToCm = (inches) => inches * 2.54;

const add = (a, b = 3) => a + b;

// Returning an object

function makeABaby(first, last) {
	const baby = {
		name: `${first} ${last}`,
		age: 0
	};
	return baby;
}
