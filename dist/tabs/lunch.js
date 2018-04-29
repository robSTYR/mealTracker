"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const lunchUI_1 = require("../User_Interfaces/lunchUI");
const lunch = new tabris_1.Tab({
    title: 'Lunch',
    image: { src: 'src/images/lunchIcon.png', scale: 1.5 }
});
lunchUI_1.default.appendTo(lunch);
exports.default = lunch;
