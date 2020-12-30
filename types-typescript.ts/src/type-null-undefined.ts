// Explicita
let nullVariable: null;
nullVariable = null;
// Error: nullVariable = 1;

// Aqui difiere el tipo de dato any por eso admite string
let otherVariable = null;
otherVariable = 'test';

console.log('nullVariable:', nullVariable);
console.log('otherVariable:',otherVariable);

// Undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // Error

let otherUndefined = undefined;
otherUndefined = 1;

console.log('undefinedVariable',undefinedVariable);
console.log('otherUndefined',otherUndefined);

// Null y Undefined: Como subtipos
let albumName: string;
// albumName = null;
// albumName = undefined;