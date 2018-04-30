"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const composite_1 = require("../components/composite");
const button_1 = require("../components/button");
const dailySummary_1 = require("./dailySummary");
const mealInput_1 = require("../components/mealInput");
let breakfastComposite = new composite_1.default(0, 0, 0, 0, '#ffffff');
let bkfastCursive = new tabris_1.ImageView({
    left: 10, top: 10, right: 10, height: 200,
    image: 'src/images/breakfastCursive.png',
    background: '#ffffff'
}).appendTo(breakfastComposite);
let bkfastImage = new tabris_1.ImageView({
    left: 10, top: 'prev() -40', right: 10, height: 200,
    image: 'src/images/breakfast_adobe.jpeg',
    background: '#ffffff',
}).appendTo(breakfastComposite);
let breakfastTextView = new tabris_1.TextView({
    left: 5, right: 5, top: 'prev() 20',
    alignment: 'center',
    text: 'Enter what you ate for breakfast, each item separated by a comma'
}).appendTo(breakfastComposite);
let breakfastMealInput = new mealInput_1.default('prev() 10', 15, 15, 30, 'What did you eat?', breakfastTextView, true, "send", (text) => {
    let userInput = text;
    breakfastMealInput.saveData(dailySummary_1.categoryTypes.breakfast, breakfastTextView, userInput);
}).appendTo(breakfastComposite);
let addBreakfastbutton = new button_1.default('breakfastButton', 'Add My Breakfast', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let breakfast = breakfastMealInput.text;
    breakfastMealInput.saveData(dailySummary_1.categoryTypes.breakfast, breakfastTextView, breakfast);
}).appendTo(breakfastComposite);
exports.default = breakfastComposite;
