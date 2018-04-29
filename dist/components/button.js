"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
class AddMealButton extends tabris_1.Button {
    constructor(name, text, textColor, background, left, right, top, callback) {
        super({ text, textColor, background, left, right, top });
        this.on({ select: callback });
    }
    set _text(text) {
        this.text = text;
    }
}
exports.default = AddMealButton;
