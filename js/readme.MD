Falsey:
    false, null, 0, -0, Undefined, NaN, '', "", 0n
Truthy:
    true, {}, [], -0.75, infinity, -infinity, "false", "0", 12n, document.all


Tenary IF:
    ()? : ;
    expression? : ; 

Events
    addEventListener()
    removeEventListener()
    calling abort() from addEventListener() 
Documents
    parent.chlidren[] //ul.children[3]
    parent.(firstElementChild/lastElementChild/nextElementSibling/previousElementSibling)
    node.firstChild.nodeValue
    node.contains()

    insertBefore: node.insertBefore(newNode, refeerceNode)
    replaceChild: parent.replaceChild(new, old)
    cloneNode: node.cloneNode(true/false) //false copies without children

Styling
    element.className //to set a class
    element.classList.add() //to add a class to existing
    element.classList.remove() //to remove existing class
    element.classList.toggle() //remove if avaiable or add if not
    element.style.propNmae //element.style.backgroundColor = ';
    window.getComputedStyle(ul) //to get styling available for ul.
    style.getPropertyValue

DocumentFragment:
    To hold values in one place seperate from main doc tree. This can be added to main tree after operations for performance 
    x = new DocumentFragment() //constructor
    //x.appendChild(li)

Events:
    click: //for links, f.preventDefault
    input: //for every char typed
    change: //for each exit after input
    blur: exit with empty input

    keydown
    keyup
    keypress

    mouseout
    mouseover


USEFUL METHODS
.toLocaleString
.toFixed(2)

Array Methods
    array.push()
    array.pop() //doesnt take any statement.removes last array. returns the pop value
    array.unshift() //same as push but from the front
    array.shift() //same as pop but from the front. returns the pop value
    array.splice(pos, qty, value) // to remove values' from an array at certain position
    array.reverse() // reverses the array positions. first becomes last
    array.sort() // arranges alphabetically.
    array.indexOf() //returns position of item being searched
    array.lastIndexOf() // searches from behind
