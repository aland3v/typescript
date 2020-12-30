export abstract class Item { // abstract no se puede instanciar
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