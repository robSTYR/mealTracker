"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
let breakfastComposite = new tabris_1.Composite({
    left: 0, right: 0, bottom: 0, right: 0,
    background: '#f3f3f3'
}).appendTo(tabris_1.ui.contentView);
let breakfastTextView = new tabris_1.TextView({
    left: 0, right: 0, top: '100',
    text: 'Enter what you ate for \n breakfast, each item seperated by \n a comma'
}).appendTo(breakfastComposite);
let breakfastMealInput = new tabris_1.TextInput({
    top: '36%', left: '20%', right: '20%',
    message: 'Don\'t forget the commas!'
}).on('accept', ({ text }) => {
    console.log(`This is what I ate: ${text}`);
}).appendTo(breakfastComposite);
exports.default = breakfastComposite;
