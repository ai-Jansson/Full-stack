/**
 * @constant {number} age - The user's age
 */
const age = 20;
/**
* Private function to say hello
* @private
*/
function sayHello() {
  console.log('Hello!');
}
/**
* Public function that uses the private sayHello function
*/
function greet() {
  sayHello();
  console.log(`Greeting from user who is ${age} years old.`);
}
/**
* @typedef {Object} Module
* @property {string} username - The username
* @property {Function} greet - A function to greet
* @property {number} age - The user's age
*/
/**
* @type {Module}
*/
module.exports = {
  username: 'jansson',
  greet,
  age
}
