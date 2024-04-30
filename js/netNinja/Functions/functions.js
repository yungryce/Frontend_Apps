/*
greet(); this //has been declared on ln10

const store = function() {
    console.log('check this out')
};
store();

function greet() {
    console.log('hello there!');
}
*/

/*const speak = function(name, time) {
    console.log('Good', name, time)
    //console.log(`Good ${time} ${name}`)
}
speak('mario', 'morning')
//console.log(name) local var
*/

/*function store(name) {
    console.log(`this holds ${name}`);
}
store('mario');*/

/*const speak = function(name = 'luigi', time = 'night') {
    console.log('Good', name, time)
    //console.log(`Good ${time} ${name}`)
}
speak();
//speak('mario', 'morning')*/

/*
const calcArea = function(radius, pi) {
    //let a = pi * radius**2;
    //return a;
    return pi * radius**2
}
const area = calcArea(3, 3);
console.log(area);
*/

/*
const calVol = function (area) {
    return area * 2;
};
const vol = calVol(area);
console.log(vol);
*/

/*const data = area => area * 2;
//bracket removed for single function, return & code block removed for single line
const a = data(area);
console.log(a);*/


/*
const great = () => 'hello, world';
const b = great()
console.log(b)

const bill = (products, tax) => {
    let total = 0;
    for(i=0; i < products.length;  i++) {
    console.log(i)
        total += products[i] + products[i] * tax;
    };
    return total;
};
const result = bill([2, 3, 4, 6], 2);
console.log(result);
*/

/* Passimg a function in a function
const myFunc = function(gege) {
    let value = 50;
    gege(value);
};
//function();
//const boy = myFunc(2);
//console.log(boy);

myFunc(function(value) {
console.log(value)
});
*/

//clean up of code above
/*
const myFunc = (gege) => {
    let value = 50;
    gege(value);
};

myFunc(value => {
console.log(value)
});
*/

/*
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

//people.forEach((person, index) => console.log(index, person));

const logPerson = function(person, index) {
    console
    .log(`${index} - hello ${person}`)
};

people.forEach(logPerson);
*/
const ul = document.querySelector('.people')
const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
let html = ``;
people.forEach(person => html += `<li style="color: purple">${person}</li>`
);
console.log(html);
ul.innerHTML = html;