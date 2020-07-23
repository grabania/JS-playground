const people = [
	{ name: 'Pau', cool: true, country: 'USA' },
	{ name: 'Uap', cool: true, country: 'Mexico' },
	{ name: 'Linda', cool: false, country: 'Canada' }
];

people.forEach((person, index) => {
	console.warn(person.name);
});

console.table(people);

//Console Methods

//CAllstack

//Grabbing Elements

//Breakpoints

//Scope

//Network Requests

//Break On Atribute

//Some Stup Code

function doALotOfStuff() {
	console.group('Doing some stuff');
	console.log('Hey I am one');
	console.warn('watch out!');
	console.error('Hey');
	console.groupEnd('Doing some stuff');
}

function doctorize(name) {
	// console.count(`running Doctorize for ${name}`);
	return `Dr ${name}`;
}

function greet(name) {
	doesNotExist(); //Cause an error
	return `Hello ${name}`;
}

function go() {
	const name = doctorize(greet('Me'));
	console.log(name);
}
