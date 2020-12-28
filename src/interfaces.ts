export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string,
    date: string,
    orientation: PhotoOrientation
}

// funcion para mostrar photografia
function showPicture(picture: Picture){
    console.log(`[title: ${picture.title},
                    date: ${picture.date},
                    orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'Teast-title',
    date: '2020-03-04',
    orientation: PhotoOrientation.Landscape
}

showPicture(myPic)
showPicture(
    {
        title: 'celphone',
        date: '2020',
        orientation: PhotoOrientation.Portrait
        // extra: 'test' // Error
    }
);