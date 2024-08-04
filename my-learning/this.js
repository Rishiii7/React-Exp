/**
 * It is common that object method ( function inside an object ) needs to access the information of the object.
 * To access the object, a method ( function inside an object ) an use `this` keyword
 * 
 */

let user = {
    name: "rishi",
    age: 32,
    getInfo : function () {
        console.log(`${this.name} is ${this.age} years old`);
    },
}

user.getInfo(); // rishi is 32 years old

/**
 * The value of `this` is evaluated at run-time, depending upon the context
 * We can even call the function without an object at all:


In this case this is undefined in strict mode. If we try to access this.name, there will be an error.

In non-strict mode the value of this in such case will be the global object (window in a browser, we’ll get to it later in the chapter Global object). This is a historical behavior that "use strict" fixes.

Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.


 */
function sayHi() {
    "use strict";
    console.log(this);
}
  
sayHi(); // undefined

sayHi = () => {
    console.log(this)
}
sayHi();

function logThis() {
    console.log(this);
}

[1,2,3].forEach(logThis);

const globalThis = this

var foo = 1;
var change = () => {
    "use strict";
  this.foo = 2;
  console.log(this);
};
var obj = {
  foo: 3
};
var bounded = change.bind(obj);

// What would be the output of the following?
console.log(foo);
console.log(change());
console.log(foo);
console.log(obj.foo);
console.log(bounded());