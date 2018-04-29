"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const moment = require("moment");
const composite_1 = require("../components/composite");
const textInput_1 = require("../components/textInput");
const button_1 = require("../components/button");
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
let dinnerMealInput = new textInput_1.default('prev() 10', 15, 15, 30, 'What did you eat?', true, "send", (text) => {
    let userInput = text;
    let now = moment().format('MMM Do YY');
    if (userInput.length >= 3) {
        localStorage.setItem(`Dinner - ${now}`, `${userInput}`);
        renderSuccessMessage();
        setTimeout(resetInputFeedback, 3000);
    }
    else {
        renderFailedSaveInfo();
        setTimeout(resetInputFeedback, 3000);
    }
}).appendTo(dinnerComposite);
let addDinnerButton = new button_1.default('dinnerButton', 'Add My Dinner', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let dinner = dinnerMealInput.text;
    if (dinner.length >= 3) {
        let now = moment().format('MMM Do YY');
        localStorage.setItem(`Dinner - ${now}`, `${dinner}`);
        renderSuccessMessage();
        setTimeout(resetInputFeedback, 3000);
    }
    else {
        renderFailedSaveInfo();
        setTimeout(resetInputFeedback, 3000);
    }
}).appendTo(dinnerComposite);
const fetchData = (text) => {
    fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${text}`, {
        headers: {
            "x-app-id": "99853ada",
            "x-app-key": "eabf89a4f19c90c12ee26bbe9807d9b4"
        }
    }).then(response => response.json())
        .then((json) => {
        console.log(json.branded);
    });
};
exports.default = dinnerComposite;
