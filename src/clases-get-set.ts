export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// get y set
class Picture {
    // Propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(id: number,
        title: string,
        orientation: PhotoOrientation) {
            this._id = id;
            this._title = title;
            this._orientation = orientation;
    }

    get id() {// metodo y atributo no deben tener igual identificador
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    public get orientation(): PhotoOrientation {
        return this._orientation;
    }

    public set orientation(value: PhotoOrientation) {
        this._orientation = value;
    }

    // Comportamiento
    public toString(){
        return `[id: ${this.id},
                 title: ${this.title},
                 orientation: ${this.orientation}]`
    }
}

class Album {
    private _id: number;
    private _title: string;
    private pictures: Picture[];

    public constructor(id:number,
        title: string) {
            this._id = id;
            this._title = title;
            this.pictures = [];
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get id_1(): number {
        return this._id;
    }
    public set id_1(value: number) {
        this._id = value;
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

// Instanciación
const album: Album = new Album(1, 'Personal Pic');
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);

// Accediendo a los miembros publicos
console.log('picture.id', picture.id); // internamente get id()
picture.id = 100; // internamente, set id(100)
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album', album);
