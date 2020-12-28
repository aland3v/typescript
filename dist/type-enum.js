"use strict";
// Orientacion para Fotografias
//const landscape = 0;
//const portrait = 1;
//const square = 2;
//const panorama = 3;
// En typescript:
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; // 3
})(PhotoOrientation || (PhotoOrientation = {}));
const landscape = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[landscape]);
