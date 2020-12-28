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