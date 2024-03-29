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

// function makeABaby(first, last) {
// 	const baby = {
// 		name: `${first} ${last}`,
// 		age: 0
// 	};
// 	return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

//IIFE
//Immediately Invoked Function Expression

(function() {
	return 'You are cool';
})();

//Methods!!!
const cat = {
	name: 'me me',
	//Method!
	sayHi: function() {
		console.log('Hey me');
		return 'Hey me';
	},
	//Short hand Method
	yellHi() {
		console.log('Hey Meeee');
	},
	//Arrow function
	wisperHi: () => {
		console.log('hii');
	}
};

//Callback Functions
//Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
	console.log('Great Clicking!!');
}

button.addEventListener('click', handleClick);

//Timer Callback
setTimeout(function() {
	console.log('Done! Time to eat!');
}, 1000);

//Timer Callback-Arrow Function
setTimeout(() => {
	console.log('Done! Time to eat!');
}, 1000);
