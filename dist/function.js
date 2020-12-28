// Crear una fotografia
/*function createPicture(title, date, size) {
    // title
    console.log(title);
    console.log(date);
    console.log(size);
}*/
// Usando TS, definimos tipos para parametros
function createPicture2(title, date, size) {
    console.log('create Picture using', title, date, size);
}
createPicture2('My birthday', '2020-03-10', '500x500');
createPicture2('Bolivia inc', '2020-04-20');
createPicture2();
// Flat arrow function
let createPic = (title, date, size) => {
    /*return {
        title: title,
        date: date,
        size: size
    };*/
    //cuando clave y valor son lo mismo:
    return { title, date, size };
};
const picture = createPic('english seasson', '2020-03-04', '500x500');
console.log('picture', picture);
/**
 * Listado de propiedades de una foto
 *
 * @param   {string}      title Nombre de la foto.
 * @param   {string}      date Fecha en la que fue tomada.
 * @param   {SquareSize}  size (Optional) Tamaño de la foto.
 *
 * @return  {object}
 */
const dataPicture = (title, date, size = "100x100") => ({
    title,
    date,
    size,
});
// Tipo de retorno con TypeScript
function handleError(code, message) {
    if (message === 'error') {
        throw new Error(`${message}. Code Error: ${code}`);
    }
    else {
        return 'An error has occurred';
    }
}
try {
    let result = handleError(200, 'OK'); // return: string
    console.log('result', result);
    result = handleError(404, 'error'); // return: never(nunca retorna un valor valido)
    console.log('result', result);
}
catch (error) {
}
// Plus: funcion como parametro, => valRetorno
function apply(items, fn) {
    ///....
}
