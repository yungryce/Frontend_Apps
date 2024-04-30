let title = document.getElementById('title')
title.textContent = 'Introduction to Javascript'

let body = document.querySelector('body')
let attrBodyId = document.createAttribute('id')
attrBodyId.value = 'body'
body.setAttributeNode(attrBodyId)

let mainCreate = document.createElement('main')
body.appendChild(mainCreate)
let main = document.querySelector('main')
let attrMainId = document.createAttribute('id')
attrMainId.value = 'main'
main.setAttributeNode(attrMainId)


let heading = document.createElement('h1')
main.appendChild(heading)
let h1 = document.querySelector('h1')
let attrh1 = document.createAttribute('id')
attrh1.value = 'topic'
h1.setAttributeNode(attrh1)
heading.textContent = 'Introduction to Javascript'

let heading2 = document.createElement('h3')
main.appendChild(heading2)
let h3 = document.querySelector('h3')
let attrh3 = document.createAttribute('id')
attrh3.value = 'Another topic'
h3.setAttributeNode(attrh3)
h3.textContent = 'Loading Movies'


let listPara = document.createElement('p')
main.append(listPara)
let para = document.querySelector('p')
let attrp = document.createAttribute('id')
attrp.value = 'para'
para.setAttributeNode(attrp)
para.innerHTML = 'And Now, a list of <strong>MOVIES<strong'

let ul = document.createElement('ul')
main.appendChild(ul)

const movies = () => {
    movieList.forEach(movie => {
        let li = document.createElement('li')
        let a = document.createTextNode(movie)
        li.appendChild(a)
        ul.appendChild(li)
    }); 
}
movies()
// main.removeChild(ul)
// let c1 = main.children[2]
// let c2 = main.firstChild
// let c3 = main.firstElementChild
// let c4 = c1.nextElementSibling
// console.log(c1, c2, c3, c4)

let listss = document.querySelector('ul')
let fourthChild =  listss.children[3]
fourthChild.textContent = 'John Wick'
 let li4 = fourthChild.firstChild.nodeValue
console.log(li4)

let lead = window.getComputedStyle(ul)
let love = lead.getPropertyValue('background-  color')
console.log(love)

