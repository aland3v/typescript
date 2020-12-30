"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <> // Angle Bracket sintax
let username;
username = 'aland3v';
// tenemos una cadena, TS confia en mi!
let message = username.length > 5 ?
    `Welcome ${username}` :
    `Username is too short`;
console.log('message', message);
let usernameWithId = 'aland3v 1';
username = usernameWithId.substring(0, 7);
console.log('Username only', username);
// Sintaxis "as"
message = username.length > 5 ?
    `Welcome ${username}` :
    `Username is too short`;
console.log('message', message);
let helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log('username', username);
