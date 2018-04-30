"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
class Input extends tabris_1.TextInput {
    constructor(top, left, right, height, message, autoCorrect, enterKeyType, callback) {
        super({ top, left, right, message, autoCorrect, enterKeyType });
        this.on({ accept: () => callback(this.text) });
    }
    set _text(text) {
        this.text = text;
    }
    ;
}
exports.default = Input;
