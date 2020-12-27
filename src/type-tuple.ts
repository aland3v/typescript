export {};
// [1, 'user]
let user: [number, string];
user = [2, 'aland3v']

console.log('user', user)
console.log('User name:', user[1]);
console.log('User id:', user[0]);
console.log('Username length:', user[1].length);
console.log('id', user[0]);

let userInfo: [number, string, string]
userInfo = [2, 'pepe', "pepelucho"];
console.log('userInfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = []; // debemos inicializarlo para que tenga el metodo push()
array.push([1, 'aland3v'])
array.push([2, 'pepe'])
array.push([3, 'lends'])
console.log('array', array);


// Uso de funciones Array
array[2][1] = array[2][1].concat('001');
console.log('array', array);
