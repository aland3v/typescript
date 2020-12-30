"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_app_1 = require("./photo-app");
const user = new photo_app_1.User(1, 'aland3v', 'alan', true);
const album = new photo_app_1.Album(10, 'Platzi Pictures');
const picture = new photo_app_1.Picture(1, 'Typescript Course', photo_app_1.PhotoOrientation.Landscape);
// Creamos relaciones entre objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
