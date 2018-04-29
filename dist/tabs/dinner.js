"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const DinnerUI_1 = require("../User_Interfaces/DinnerUI");
const dinnerTAb = new tabris_1.Tab({
    title: 'Dinner',
    image: { src: 'src/images/broccoli.png', scale: 1.5 }
});
DinnerUI_1.default.appendTo(dinnerTAb);
exports.default = dinnerTAb;
