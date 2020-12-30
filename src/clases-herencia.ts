export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// Superclase
abstract class Item { // abstract no se puede instanciar
    protected _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
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

}

// get y set
class Picture extends Item{
    // Propiedades
    private _orientation: PhotoOrientation;

    public constructor(id: number,
        title: string,
        orientation: PhotoOrientation) {
            super(id, title);
            this._orientation = orientation;
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

class Album extends Item {
    private pictures: Picture[];

    public constructor(id:number,
        title: string) {
            super(id, title);
            this.pictures = [];
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

// Error:
// const item = new Item(1, 'title');
// console.log(item);
