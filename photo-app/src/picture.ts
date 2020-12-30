import { PhotoOrientation } from "./photo-orientation";
import { Item } from './item'

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