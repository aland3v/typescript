export {}

// Alias de tipos: TS
type TypeIdUser = number | string;
type Username = string;
let idUser: TypeIdUser;
idUser = 10;
idUser = '10';

// buscar username dado un ID
function getUserNameById(id: TypeIdUser): Username{
    // Logica de negocio, find the user
    return 'luxto';
}

getUserNameById(20);
getUserNameById('20');

// Tipos literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
let smallPircure: SquareSize = '100x100';
//let smallPircure2: SquareSize = '200x200'; //error
let mediumPicture: SquareSize = '500x500';
console.log('mediumPicture', mediumPicture);

