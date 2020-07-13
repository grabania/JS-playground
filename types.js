const name = 'Bob';
const middle = 'the';
const last = `Builder`;

const sentence = 'she\'s so "cool"';
const sentence2 = `she's so "cool"`;

const song = `Ohhh

ya

I like 

pizza`;

const hello = `hello my name is ${name}. Nice to meet you`;

const html = `
    <div>
        <h2>${name}</h2>
        <h2>${hello}</h2>
    </div>
`;

document.body.innerHTML = html;

console.log(html);
