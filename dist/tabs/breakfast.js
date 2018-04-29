"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const breakfastUI_1 = require("../User_Interfaces/breakfastUI");
const breakfastTab = new tabris_1.Tab({
    title: 'Breakfast',
    image: { src: 'src/images/breakfastIcon.png', scale: 1.5 }
});
breakfastUI_1.default.appendTo(breakfastTab);
exports.default = breakfastTab;
