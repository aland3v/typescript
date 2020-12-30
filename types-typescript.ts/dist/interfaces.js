"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// funcion para mostrar photografia
function showPicture(picture) {
    console.log(`[title: ${picture.title},
                    date: ${picture.date},
                    orientation: ${picture.orientation}]`);
}
let myPic = {
    title: 'Teast-title',
    date: '2020-03-04',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'celphone',
    date: '2020',
    orientation: PhotoOrientation.Portrait
    // extra: 'test' // Error
});
function generatePicture(config) {
    const pic = { title: 'Default', date: '2020-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel' });
console.log('picture', picture);
picture = generatePicture({ title: 'Travel', date: '2021-09' });
console.log('picture', picture);
let user;
user = { id: 10, username: 'luis', isPro: true };
console.log(user);
user.username = 'paparazzi';
// user.id = 20; // Error
console.log(user);
