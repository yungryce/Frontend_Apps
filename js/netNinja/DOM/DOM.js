const play = document.querySelector('p');
const pley = document.querySelector('.error');
const pliy = document.querySelector('div.error');
const ploy = document.querySelector('body > div:nth-child(2) > p:nth-child(2)');
console.log(play, pley, pliy, ploy);
console.log(1)

const slay = document.querySelectorAll('p');
//console.log(slay);
//console.log(slay[1]);
slay.forEach(lay => {
    console.log(lay);
}); // to cycle through

const sley = document.querySelectorAll('.error');
console.log(sley);

const sway = document.getElementById('pageTitle');
console.log(sway);

const errors = document.getElementsByClassName('error');
/*
console.log(errors[0]);
errors.forEach(error => {
    console.log(error);
});
//this wont work as its not same with #id nodelist
*/


const sweet = document.querySelector('p');
//console.log(sweet.innerHTML);
console.log(sweet.innerText);
//console.log(sweet.innerHTML = 'joshua aboy');
console.log(sweet.innerText += ' joshua aboy');

const swaat = document.querySelectorAll('p');
swaat.forEach(swat => {
    //console.log(swat.innerText);
    console.log(swat.innerText += ' for fun')
});

const content = document.querySelector('.content');
content.innerHTML += '<h2>this is just text</h2>';


const people = ['mario', 'luigi', 'yoshi']
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});


const link = document.querySelector('a');
console.log(link.getAttribute('href')); 
link.setAttribute('href', 'https://google.com');
link.innerText = 'this cool place is google';

const gege = document.querySelector('p');
gege.setAttribute('style', 'color: green')

