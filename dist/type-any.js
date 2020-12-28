// Tipo explicito
let idUser;
idUser = 1;
idUser = '1';
console.log('idUser:', idUser);
// Tipo inferido
let otherId;
otherId = 1;
otherId = '1';
otherId = true;
console.log('otherId:', otherId);
let surprise = 'hello typescript';
// podria haber error en tiempo de ejecucion
// si encaso el valor de surprise fuera otro
// distintio al string
const res = surprise.substring(6);
console.log(res);
