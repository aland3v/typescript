export enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

export class User {
    private album: Album[];

    constructor(private id: number,
                private username: string,
                private firstName: string,
                private isPro: boolean
                ) {
                    this.album = []
                }
    addAlbum(album: Album) {
        this.album.push(album);
    }
}

// Superclase
abstract class Item { // abstract no se puede instanciar
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id() {// metodo y atributo no deben tener igual identificador
        return this._id;
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

}

// get y set
export class Picture extends Item{
    public static photoOrientation = PhotoOrientation;
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
                 orientation: ${this._orientation}]`
    }
}

export class Album extends Item {
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