// Tipo Explicito
let users;
users = ['pepe', 'soho', 'razi', 'lens'];
// users = [1, true, 'test']; // Error
// Tipo Inferido
let otherUsers = ['pepe', 'soho', 'razi', 'lens'];
// otherUsers = [1, true, 'test']; // Error
// Array<TIPO>
let pictureTitles;
pictureTitles = ['Favorite sunset', 'vacation time', 'landscape'];
// Accediendo a los valores en un Array
console.log(users[1]);
console.log(users.length);
// Uso de funciones en Arrays
users.push('aPlatziUser');
users.sort();
console.log('users', users);
