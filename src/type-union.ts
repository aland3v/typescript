export {} // para que no haya conflictos con otros files con nombres de variables iguales que aqui
// 10, '10'
let idUser: number | string;
idUser = 10;
idUser = '10';

// buscar username dado un ID
function getUserNameById(id: number | string){
    // Logica de negocio, find the user
    return 'luxto';
}

getUserNameById(20);
getUserNameById('20')