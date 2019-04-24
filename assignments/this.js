/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: When in global scope, this will return the window or console object such as JS inner-workings
* 2. Implicit Binding: the 'this' keyword acts as a pronoun for the applicable object and its attributes
* 3. New binding: in constructors, this is used to represent a new instance of an object
* 4. Explicit binding: used with call/apply method this explicitly defines the new context
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const speaker = {
    name: "Hank",
    greet: function() {
        console.log(`Hello my name is ${this.name}`);
    }
};
speaker.greet();

// Principle 3

// code example for New Binding
function Person(name) {
    this.name = name;
    this.isAlive = true;
    this.greeting = function () {
        console.log(`My name is ${this.name}`)
    }
}
const peter = new Person('Peter');
console.log(peter.isAlive);

// Principle 4

// code example for Explicit Binding
const bob = new Person('Bob');

peter.greeting.call(bob);
