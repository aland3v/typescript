"use strict";
// Type: object
let user;
user = {}; // Object
user = {
    id: 1,
    username: 'aland3v',
    firstName: 'Alan',
    isPro: true
};
console.log('user', user);
// Object vs object(Clase JS vs tipo TS)
const myObj = {
    id: 1,
    username: 'aland3v',
    firstName: 'Alan',
    isPro: true
};
// es considerado como una instancia de la clase Object de JS
const isInstance = myObj instanceof Object;
console.log(isInstance);
console.log('myObj.username', myObj.username);
//console.log('user.username', user.username);
