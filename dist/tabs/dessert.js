"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const dessertUI_1 = require("../User_Interfaces/dessertUI");
const dessertTab = new tabris_1.Tab({
    title: 'Dessert',
    image: { src: 'src/images/cakeIcon.png', scale: 1.5 }
});
dessertUI_1.default.appendTo(dessertTab);
exports.default = dessertTab;
