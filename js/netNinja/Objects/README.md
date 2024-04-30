OBJECTS LITERALS

var varName = {
    property name: 'property',
};

Accessing Object properties
    dot notation
        console.log(variable.property)
    Bracket notation
        console.log(variable['property'])

GLOBAL OBJECTS

    this: Used to access properties. this could be global object when used in root object (window object) or used to access a local or user object

    Math: for math functions

    console: for console functions

OBJECT TYPES - how they are stored and used in memory
    reference: Object type - literals, arrays, functions, dates etc - stored in heap(more memory but slow). adds a variable name to the heap and adds a variable pointer to the stack. variabe pointer becomes the variable name on stack that is locked.
    primitive: other data types - number, strings, boolean, null, undefined, symbols - stored on a stack(limited space). locks a variable name to access value