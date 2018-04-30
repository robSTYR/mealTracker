"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composite_1 = require("../components/composite");
const textInput_1 = require("../components/textInput");
const button_1 = require("../components/button");
const tabris_1 = require("tabris");
const moment = require("moment");
const fetchedFoddArr = [];
// GLOBAL FUNCTIONS
const renderSuccessMessage = () => {
    dessertTextView.text = 'Your meal has been added to the Daily Summary\u2705';
    dessertInput.borderColor = '#1cef71';
};
const renderFailedSaveInfo = () => {
    dessertInput.borderColor = '#ff0c18';
    dessertTextView.text = 'Please add a meal with at least 3 letters!';
};
const resetInputFeedback = () => {
    dessertInput.text = '';
    dessertInput.borderColor = '#efefef';
    dessertTextView.text = 'What did you treat yourself with?';
};
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
let dessertInput = new textInput_1.default('prev() 10', 15, 15, 30, 'What did you treat yourself with?', true, "send", (text) => {
    let userInput = text;
    let now = moment().format('LLLL');
    if (userInput.length >= 3) {
        localStorage.clear();
        localStorage.setItem(`Dessert`, `${userInput}`);
        renderSuccessMessage();
        setTimeout(resetInputFeedback, 300);
    }
    else {
        renderFailedSaveInfo();
        setTimeout(resetInputFeedback, 3000);
    }
}).appendTo(dessertComposite);
let addDessertButton = new button_1.default('DessertButton', 'Add My Dessert', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let dessert = dessertInput.text;
    let now = moment().format('LLLL');
    if (dessert.length >= 3) {
        localStorage.clear();
        localStorage.setItem(`Dessert`, `${dessert}`);
        renderSuccessMessage();
        setTimeout(resetInputFeedback, 300);
    }
    else {
        renderFailedSaveInfo();
        setTimeout(resetInputFeedback, 3000);
    }
}).appendTo(dessertComposite);
exports.default = dessertComposite;
