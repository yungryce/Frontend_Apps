for (let i=0; i<=5; i++) {
    console.log(i * 2, 'in loop:');
}
console.log('loop ended:')

const names = ['mario', 'luigi', 'shaun'];
for ( let i=0; i < names.length; i++) {
    //console.log(names[i])
    let html = `<div>${names[i]}</div>`
    console.log(html);
}

let i=0;
    while (i < 5) {
        i++;
        console.log(i, 'in loop');
    }

i-=5; 
console.log(i)
while (i < names.length) {
    console.log(names[i]);
    i++;
}

//i+=2
do {
    console.log('val of i is:', i)
    i++;
} while (i < 5)
console.log(i);


const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
if (ninjas.length > 3) {
    console.log("That's a lot of ninjas")
}

const password = '123456@'; //no feedback if false, code runs once
if (password.length < 8) {
    //alert('invalid password') 
    console.log('invalid password')
}

if(password.length >=8) {
    console.log('password is strong enough');
} else {
    console.log('password invalid');
}
//code runs twice with a single feedback( if then else)
console.log(1)

if (password.length >= 12 && password.includes('@')) {
    console.log('password is impregnable');
} else if (password.length >=8 || password.includes('@') && password.length > 5) {
    console.log('password is strong');
} else {
    console.log('pass invalid')
}

console.log(1)

if (password.length >= 8 && password.includes('@') ) {
    console.log('password is strong enough');
} else {
    console.log('password is too weak')
}

 let user = false;
 //if's are true statements and needs to be reversed. if statement wont run if false
 if (!user) {
    console.log(user, 'please log in')
 }

 const scores = [50, 25, 0, 30, 100, 20, 10, 100, 100, 27]
 for (i = 0; i < scores.length; i++) {
    
    if (scores[i] === 0) {
        continue;
    }
    //skips score '0'
    
    console.log('your score is', scores[i])
    
    if (scores[i] === 100){
        console.log('Perfect score!');
        break;
    }
}

const grade = 'D'

switch (grade) {
    case 'A':
        console.log('You got a dinstinction');
        break;  
    case 'B':
        console.log('Very good grade');
        break;
    case 'C':
        console.log('You got a credit');
        break;
    case 'D':
        console.log('You got a Pass');
        break;
    case 'E':
        console.log('You got a Psss');
        break;
    case 'F':
        console.log('You failed');
        break;
    default:
        console.log('invalid grade');
        break;

}
//runs every code after first true value. needs to break 


let dickSize = 30; //global scope

if (true) {
    let dickSize = 50; //local scope
    let shoeSize = 'seven'
    var geGe = 'true'
    //dickSize = 40; global scope 
    console.log(dickSize, shoeSize);
}
    if(true){
        console.log(dickSize); //this follows nested rule 
    }
console.log(dickSize, geGe);// cant run shoeSize in global log 
