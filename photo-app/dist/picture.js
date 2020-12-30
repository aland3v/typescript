"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const photo_orientation_1 = require("./photo-orientation");
const item_1 = require("./item");
class Picture extends item_1.Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(value) {
        this._orientation = value;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id},
                 title: ${this.title},
                 orientation: ${this._orientation}]`;
    }
}
exports.Picture = Picture;
Picture.photoOrientation = photo_orientation_1.PhotoOrientation;
