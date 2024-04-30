//alert('hello world!');
console.log(1);
console.log(2);
let age = 25;
let year =2019;
console.log(age,year);
age='boy';
console.log(age);
let ageYear = age+' '+year;
console.log(ageYear[2]); //properties
console.log(ageYear.length);
console.log(age.toUpperCase()); //methods
let results = age.toLowerCase();
console.log(results, ageYear);
//index=position of element
let email = 'chigbujoshua@yahoo.com';
let index = email.indexOf('@');
console.log(index);
console.log(email.lastIndexOf('o'));
console.log(email.slice(4,12));
console.log(email.substr(4,12));
console.log(email.replace('g', 'b'));

let likes = 10;
//likes--;
//likes+=10;
likes*=3;
console.log(likes);

//NaN - Not a Number
console.log(5* 'hello');

let base = 'the blog has ' + likes + ' likes';
console.log(base);

//Template string 
const title = 'best reads of 2019';
const author = 'Chigbu';
//let aba = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
let aba = `The blog called ${title} by ${author} has ${likes} likes`; 
console.log(aba);

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;
console.log(html);

let ninjas = ['shaun', 'ryu', 'çhun-li', 20, 30];
ninjas[1] = 'ken';
console.log(ninjas);
console.log(ninjas.length);
console.log(ninjas.join('-'));
console.log(ninjas.indexOf(20));
let fighters = ['ditweni', 15]
//console.log(ninjas.concat('john', 'dumebi'))
console.log(ninjas.concat(fighters));
let results2 = ninjas.push('titi');
results2 = ninjas.pop();
//console.log(result);
//console.log(ninjas.pop()); same as line 61
console.log(ninjas);

//let age2;
let age2 = null;
console.log(age2, age2 + 3, `the age is ${age2}`);

let results3 = email.includes('@');
let names = ['mario', 'luigi', 'toads'];
let results4 = names.includes('mari')
console.log(results3);
console.log(results4);

let age3= 52;
console.log(age3)
console.log(age3 == 52); // loose comparison
console.log(age3 == '52');
console.log(age3 === '52');
console.log(age3 !== '52');

console.log(age3);
console.log(age3 == 25);
console.log(age3 != 52);
console.log(age3 != 25);
console.log(age3 >= 52);
console.log(age3 >= 57);

let names2 = 'kiki';
console.log(names2);
console.log(names2 == 'kiki'); //capital letter
console.log(names2 > 'shaun'); //'k' comes before 's'
console.log(names2 > 'Kiki'); //small letter comes before capital
console.log(names2 > 'Ade'); //small letter priority over capital and alphabeth placement


let score = '100';
console.log(score + 1);
console.log(typeof(score));
score = Number(score);
console.log(score + 1);
console.log(typeof(score));
console.log(Number(names2));
let newNum = 50;
console.log(typeof(newNum));
newNum = String(newNum);
console.log(newNum, typeof(newNum));
console.log(Boolean(score));
let score2 = Boolean(0); //zero is a falsy number while posive & negative numbers are truthy
console.log(score2);
score = String(score);
console.log(Boolean(score), typeof(score));//string is truthy unless string is empty ('')
