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

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
    const pic = {title: 'Default', date: '2020-03'};
    if(config.title) {
        pic.title = config.title;
    }
    if(config.date) {
        pic.date = config.date;
    }

    return pic;
}

let picture = generatePicture({});
console.log('picture',picture);
picture = generatePicture({title: 'Travel'});
console.log('picture', picture);
picture = generatePicture({title: 'Travel', date: '2021-09'});
console.log('picture', picture);

// Interfaz: Usuario
interface User {
    readonly id: number;
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 10, username: 'luis', isPro: true};
console.log(user);
user.username = 'paparazzi';
// user.id = 20; // Error
console.log(user);