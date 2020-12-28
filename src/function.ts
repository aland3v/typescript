// Crear una fotografia
/*function createPicture(title, date, size) {
    // title
    console.log(title);
    console.log(date);
    console.log(size);
}*/

type SquareSize = '100x100' | '500x500' | '1000x1000'

// Usando TS, definimos tipos para parametros
function createPicture2(title?: string, date?: string, size?: SquareSize) {//param? -> parametro opcional
    console.log('create Picture using', title, date, size);
}

createPicture2('My birthday', '2020-03-10', '500x500');
createPicture2('Bolivia inc', '2020-04-20');
createPicture2();