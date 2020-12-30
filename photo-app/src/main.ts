import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";


const user = new User(1, 'aland3v', 'alan', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'Typescript Course', PhotoOrientation.Landscape);

// Creamos relaciones entre objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);

// borramos Album
user.removeAlbum(album);
console.log('user', user);
