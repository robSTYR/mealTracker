"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const moment = require("moment");
const composite_1 = require("../components/composite");
const textInput_1 = require("../components/textInput");
const button_1 = require("../components/button");
const renderSuccessMessage = () => {
    breakfastTextView.text = 'Your meal has been added to the Daily Summary\u2705';
    breakfastMealInput.borderColor = '#1cef71';
};
const renderFailedSaveInfo = () => {
    breakfastMealInput.borderColor = '#ff0c18';
    breakfastTextView.text = 'Please add a meal with at least 3 letters!';
};
const resetInputFeedback = () => {
    breakfastMealInput.text = '';
    breakfastMealInput.borderColor = '#efefef';
    breakfastTextView.text = 'Enter what you ate for breakfast, each item separated by a comma';
};
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
let breakfastMealInput = new textInput_1.default('prev() 10', 15, 15, 30, 'What did you eat?', true, "send", (text) => {
    let userInput = text;
    let now = moment().format('LLLL');
    if (userInput.length >= 3) {
        localStorage.clear();
        localStorage.setItem(`Breakfast`, `${userInput}`);
        renderSuccessMessage();
        setTimeout(resetInputFeedback, 300);
    }
    else {
        renderFailedSaveInfo();
        setTimeout(resetInputFeedback, 3000);
    }
}).appendTo(breakfastComposite);
let addBreakfastbutton = new button_1.default('breakfastButton', 'Add My Breakfast', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let breakfast = breakfastMealInput.text;
    if (breakfast.length >= 3) {
        localStorage.clear();
        localStorage.setItem(`Breakfast`, `${breakfast}`);
        renderSuccessMessage();
        setTimeout(resetInputFeedback, 3000);
    }
    else {
        renderFailedSaveInfo();
        setTimeout(resetInputFeedback, 3000);
    }
}).appendTo(breakfastComposite);
exports.default = breakfastComposite;
