"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const composite_1 = require("../components/composite");
const button_1 = require("../components/button");
const mealInput_1 = require("../components/mealInput");
const dailySummary_1 = require("./dailySummary");
const renderSuccessMessage = () => {
    dinnertextView.text = 'Your meal has been added to the Daily Summary \u2705';
    dinnerMealInput._text = '';
};
const renderFailedSaveInfo = () => {
    dinnerMealInput.borderColor = '#ff0c18';
    dinnertextView.text = 'Please add a food with at least 3 letters\u2049';
    dinnerMealInput.text = '';
};
const resetInputFeedback = () => {
    dinnerMealInput.text = '';
    dinnerMealInput.borderColor = '#efefef';
    dinnertextView.text = 'Enter what you ate for dinner, each item separated by a comma';
};
let dinnerComposite = new composite_1.default(0, 0, 0, 0, '#ffffff');
let dinnerCursiveImage = new tabris_1.ImageView({
    left: 10, top: 10, right: 10, height: 200,
    image: 'src/images/dinnerCursive.png',
    background: '#ffffff'
}).appendTo(dinnerComposite);
let dinnerImage = new tabris_1.ImageView({
    left: 10, top: 'prev() -40', right: 10, height: 200,
    image: 'src/images/dinner_adobe.jpeg',
    background: '#ffffff',
}).appendTo(dinnerComposite);
let dinnertextView = new tabris_1.TextView({
    left: 15, right: 15, top: 'prev() 20',
    alignment: 'center',
    text: 'Enter what you ate for Dinner, each item separated by a comma'
}).appendTo(dinnerComposite);
let dinnerMealInput = new mealInput_1.default('prev() 10', 15, 15, 30, 'What did you eat?', dinnertextView, true, "send", (text) => {
    let userInput = text;
    dinnerMealInput.saveData(dailySummary_1.categoryTypes.dinner, dinnertextView, userInput);
}).appendTo(dinnerComposite);
let addDinnerButton = new button_1.default('dinnerButton', 'Add My Dinner', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let dinner = dinnerMealInput.text;
    dinnerMealInput.saveData(dailySummary_1.categoryTypes.dinner, dinnertextView, dinner);
}).appendTo(dinnerComposite);
exports.default = dinnerComposite;
