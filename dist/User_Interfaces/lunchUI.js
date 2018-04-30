"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const composite_1 = require("../components/composite");
const button_1 = require("../components/button");
const mealInput_1 = require("../components/mealInput");
const dailySummary_1 = require("./dailySummary");
let lunchComposite = new composite_1.default(0, 0, 0, 0, '#ffffff');
let lunchCursiveImage = new tabris_1.ImageView({
    left: 10, top: 10, right: 10, height: 200,
    image: 'src/images/lunchCursive.png'
}).appendTo(lunchComposite);
let lunchImage = new tabris_1.ImageView({
    left: 10, top: 'prev() -40', right: 10, height: 200,
    image: 'src/images/lunch_adobe.jpeg',
    background: '#ffffff',
}).appendTo(lunchComposite);
let lunchTextView = new tabris_1.TextView({
    left: 15, right: 15, top: 'prev() 20',
    alignment: 'center',
    text: 'Enter what you ate for lunch, each item separated by a comma.'
}).appendTo(lunchComposite);
let lunchMealInput = new mealInput_1.default('prev() 10', 15, 15, 30, 'What did you eat for lunch?', lunchTextView, true, "send", (text) => {
    let userInput = text;
    lunchMealInput.saveData(dailySummary_1.categoryTypes.lunch, lunchTextView, userInput);
}).appendTo(lunchComposite);
let addLunchButton = new button_1.default('lunchButton', 'Add My Lunch', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let lunch = lunchMealInput.text;
    lunchMealInput.saveData(dailySummary_1.categoryTypes.lunch, lunchTextView, lunch);
}).appendTo(lunchComposite);
exports.default = lunchComposite;
