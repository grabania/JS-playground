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

function doctorize(name) {
	console.count('running Doctorize');
	return `Dr ${name}`;
}
