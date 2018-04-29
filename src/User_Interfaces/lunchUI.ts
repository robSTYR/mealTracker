import {ImageView, TextView} from "tabris";
import * as moment from 'moment';
import AppComposite from '../components/composite';
import Input from '../components/textInput';
import AddMealButton from '../components/button';

const renderSuccessMessage = () => {
    lunchTextView.text = 'Your meal has been added to the Daily Summary\u2705';
    lunchMealInput.borderColor = '#1cef71';

};

const renderFailedSaveInfo = () => {
    lunchMealInput.borderColor = '#ff0c18';
    lunchTextView.text = 'Please add a meal with at least 3 letters!';
};

const resetInputFeedback = () => {
    lunchMealInput.text = '';
    lunchMealInput.borderColor = '#efefef';
    lunchTextView.text = 'Enter what you ate for lunch, each item separated by a comma.';
};

let lunchComposite = new AppComposite(0, 0, 0, 0, '#ffffff');

let lunchCursiveImage = new ImageView({
    left: 10, top: 10, right: 10,  height: 200,
    image: 'src/images/lunchCursive.png'
}).appendTo(lunchComposite);

let lunchImage = new ImageView({
    left: 10, top: 'prev() -40', right: 10, height: 200,
    image: 'src/images/lunch_adobe.jpeg',
    background: '#ffffff',
}).appendTo(lunchComposite);

let lunchTextView: TextView = new TextView({
    left: 15, right: 15, top: 'prev() 20',
    alignment: 'center',
    text: 'Enter what you ate for lunch, each item separated by a comma.'
}).appendTo(lunchComposite);

let lunchMealInput = new Input('prev() 10', 15, 15, 30, 'What did you eat for lunch?', true, "send", (text: string) => {
    let userInput: string = text;
    let now = moment().format('MMM Do YY');
    if (userInput.length >= 3) {
        localStorage.setItem(`Lunch - ${now}`, `${userInput}`);
        renderSuccessMessage();
        resetInputFeedback();
    }
    else {
        renderFailedSaveInfo();
        resetInputFeedback();
    }
}).appendTo(lunchComposite);

let addLunchButton = new AddMealButton('lunchButton', 'Add My Lunch', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let lunch: string = lunchMealInput.text;
    let now = moment().format('LLLL');
    if (lunch.length >= 3) {
        localStorage.setItem(`Lunch - ${now}`, `${lunch}`);
        lunchMealInput._text = '';
    } else throw new Error('Please add a food that has at least three letters')
}).appendTo(lunchComposite);

export default lunchComposite;
