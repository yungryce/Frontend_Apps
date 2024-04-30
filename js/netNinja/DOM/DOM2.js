const naija = document.querySelector('h1');
//naija.setAttribute('style', 'margin: 50px;')

console.log(naija.style); // always refer to this if you dont remeber the style
console.log(naija.style.color);
naija.style.margin = '50px'; //color has not been overwritten
naija.style.color = 'blue';
naija.style.fontSize = '62px'; //'-' is replaced by 'camelCase'
naija.style.margin = ''; //removes the margin property


const content = document.querySelector('p');
console.log(content.classList); // list all classes
//content.classList.add('success'); //adds a class to html
content.classList.remove('success'); //removes class from html