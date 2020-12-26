// Void
// Tipo explicito
function showInfo(user) {
    console.log('User info', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: 'quispe', firstName: 'alan' });
// Tipo inferido
function showFormattedInfo(user) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}
showFormattedInfo({ id: 1, username: 'quispe', firstName: 'alan' });
// tipo void, como tipo de dato en variable
// null y undefined son especie de subtipos para
// el tipo void
// antes debemos dar "strict": false, en el tsconfig
let unusable;
unusable = null;
unusable = undefined;
// Tipo: Never
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
    // Solo lanza un error
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
    console.log('gestionando error');
}
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
    // nunca retornaremos la suma acumulada
}
sumNumbers(10);
