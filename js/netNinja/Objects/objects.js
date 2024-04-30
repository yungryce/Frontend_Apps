/*
//STORING OBJECTS IN ARRAYS
const netBlog = [
    {
        title: 'why we rule',
        likes: 30
    },
    {
        title: 'why we conquer',
        likes: 50
    }
];
console.log(netBlog);
*/



let user = {
name: 'cynthia',
age: 24,
email: 'yungryce@yahoo.com',
location: 'Lagos',
blogs: [
    {
        title: 'why we rule',
        likes: 30
    },
    {
        title: 'why we conquer',
        likes: 50
    }
],
login: function() {
    console.log('the user logged in');
},
logout: () => console.log('the user logged out'),
//logBlogs: () => console.log(this), dont use arrow function with 'this' keyword
logBlogs() { // modified fn syntax
    //console.log(this);
    console.log('This user has written the following blogs: ');
    this.blogs.forEach(blogs => 
        {console.log(blogs.title, blogs.likes);
    })
},
};
console.log(user.name);
user.age = 35;
console.log(user.age);
console.log(user['email'])

let aboy = 'blogs'
console.log(['blogs'])
console.log([aboy])
//cant use dot.notation for Ln14 

console.log(typeof age); //type of object

user.login();
user.logout();

//recall
const naame = 'tobi';
console.log(naame.toUpperCase());
user.logBlogs();

console.log(this); //glob object


// console.log(Math.cbrt); wont work
console.log(Math);
console.log(Math.PI); //pi is a constant

const width = 5.6;
console.log(Math.round(width)); //round here is a method/fn
console.log(Math.floor(width)); //round down
console.log(Math.ceil(width)); //round up
console.log(Math.cbrt(width));
console.log(Math.trunc(width)); //remove decimal


//generates a random number 1 - 10
const randNumber = Math.random();
console.log(randNumber);
console.log(Math.round(randNumber * 10)); 

//objects types
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`score one: ${scoreOne}`, `score two: ${scoreTwo}`);

scoreOne =  100;
console.log(`score one: ${scoreOne}`, `score two: ${scoreTwo}`); // scoreTwo unchanged


const userOne = {name:'ryu', age:32};
const userTwo = userOne;
console.log(userOne, userTwo);
userOne.age = 24;
console.log(userOne, userTwo); //changes both

