"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composite_1 = require("../components/composite");
const button_1 = require("../components/button");
const mealInput_1 = require("../components/mealInput");
const tabris_1 = require("tabris");
const dailySummary_1 = require("./dailySummary");
const fetchedFoddArr = [];
let dessertComposite = new composite_1.default(0, 0, 0, 0, '#ffffff');
let dessertCursiveImage = new tabris_1.ImageView({
    left: 10, top: 10, right: 10, height: 200,
    image: 'src/images/dessertCursive.png',
    background: '#ffffff'
}).appendTo(dessertComposite);
let dessertImage = new tabris_1.ImageView({
    left: 10, top: 'prev() -40', right: 10, height: 200,
    image: 'src/images/dessert_adobe.jpeg',
    background: '#ffffff',
}).appendTo(dessertComposite);
let dessertTextView = new tabris_1.TextView({
    left: 10, right: 10, top: 'prev() 20',
    alignment: 'center',
    text: 'Did you indulge? If so, please insert a comma between each item.'
}).appendTo(dessertComposite);
let dessertInput = new mealInput_1.default('prev() 10', 15, 15, 30, 'What did you treat yourself with?', dessertTextView, true, "send", (text) => {
    let userInput = text;
    dessertInput.saveData(dailySummary_1.categoryTypes.breakfast, dessertTextView, userInput);
}).appendTo(dessertComposite);
let addDessertButton = new button_1.default('DessertButton', 'Add My Dessert', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let dessert = dessertInput.text;
    dessertInput.saveData(dailySummary_1.categoryTypes.dessert, dessertTextView, dessert);
}).appendTo(dessertComposite);
exports.default = dessertComposite;
