import {ImageView, TextInput, TextView} from "tabris";
import * as moment from 'moment';
import AppComposite from '../components/composite';
import Input from '../components/textInput';
import AddMealButton from '../components/button';

const renderSuccessMessage = (): void => {
    breakfastTextView.text = 'Your meal has been added to the Daily Summary\u2705';
    breakfastMealInput.borderColor = '#1cef71';

};

const renderFailedSaveInfo = (): void => {
    breakfastMealInput.borderColor = '#ff0c18';
    breakfastTextView.text = 'Please add a meal with at least 3 letters!';
};

const resetInputFeedback = (): void => {
    breakfastMealInput.text = '';
    breakfastMealInput.borderColor = '#efefef';
    breakfastTextView.text = 'Enter what you ate for breakfast, each item separated by a comma';
};

let breakfastComposite = new AppComposite(0, 0, 0, 0, '#ffffff');

let bkfastCursive = new ImageView({
    left: 10, top: 10, right: 10, height: 200,
    image: 'src/images/breakfastCursive.png',
    background: '#ffffff'
}).appendTo(breakfastComposite);

let bkfastImage: ImageView = new ImageView({
    left: 10, top: 'prev() -40', right: 10, height: 200,
    image: 'src/images/breakfast_adobe.jpeg',
    background: '#ffffff',
}).appendTo(breakfastComposite);

let breakfastTextView: TextView = new TextView({
    left: 5, right: 5, top: 'prev() 20',
    alignment: 'center',
    text: 'Enter what you ate for breakfast, each item separated by a comma'
}).appendTo(breakfastComposite);


let breakfastMealInput: TextInput = new Input('prev() 10', 15, 15, 30, 'What did you eat?', true, "send", (text: string) => {
    let userInput: string = text;
    let now = moment().format('LLLL');
    if (userInput.length >= 3) {
        localStorage.clear();
        localStorage.setItem(`Breakfast`, `${userInput}`);
        renderSuccessMessage();
        setTimeout(resetInputFeedback, 300);
    } else {
        renderFailedSaveInfo();
        setTimeout(resetInputFeedback, 3000)
    }
}).appendTo(breakfastComposite);

let addBreakfastbutton = new AddMealButton('breakfastButton', 'Add My Breakfast', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let breakfast: string = breakfastMealInput.text;

    if (breakfast.length >= 3) {
        localStorage.clear();
        localStorage.setItem(`Breakfast`, `${breakfast}`);
        renderSuccessMessage();
        setTimeout(resetInputFeedback, 3000);
    } else {
        renderFailedSaveInfo();
        setTimeout(resetInputFeedback, 3000);
    }
}).appendTo(breakfastComposite);

export default breakfastComposite;
