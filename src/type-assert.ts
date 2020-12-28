export{}
// <> // Angle Bracket sintax
let username: any;
username = 'aland3v';

// tenemos una cadena, TS confia en mi!
let message:string = (<string>username).length > 5 ?
                     `Welcome ${username}` :
                     `Username is too short`;
console.log('message', message);

let usernameWithId: any = 'aland3v 1';
username = (<string>usernameWithId).substring(0,7);
console.log('Username only', username);