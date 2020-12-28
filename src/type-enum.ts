// Orientacion para Fotografias
//const landscape = 0;
//const portrait = 1;
//const square = 2;
//const panorama = 3;

// En typescript:
enum PhotoOrientation {
    Landscape = 0, // 0
    Portrait = 1, // 1
    Square, // 2
    Panorama // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[landscape]);

