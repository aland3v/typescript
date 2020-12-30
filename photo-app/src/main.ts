import { User, Album, Picture, PhotoOrientation } from './photo-app';

const user = new User(1, 'aland3v', 'alan', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'Typescript Course', PhotoOrientation.Landscape);

// Creamos relaciones entre objetos
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);
