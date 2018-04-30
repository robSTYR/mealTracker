import AppComposite from '../components/composite';
import Input from '../components/textInput';
import AddMealButton from '../components/button';
import {TextView, ImageView} from "tabris";
import * as moment from 'moment';
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

let dessertComposite = new AppComposite(0, 0, 0, 0, '#ffffff');

let dessertCursiveImage = new ImageView({
    left: 10, top: 10, right: 10,  height: 200,
    image: 'src/images/dessertCursive.png',
    background: '#ffffff'
}).appendTo(dessertComposite);

let dessertImage= new ImageView({
    left: 10, top: 'prev() -40', right: 10, height: 200,
    image: 'src/images/dessert_adobe.jpeg',
    background: '#ffffff',
}).appendTo(dessertComposite);


let dessertTextView: TextView = new TextView({
    left: 10, right: 10, top: 'prev() 20',
    alignment: 'center',
    text: 'Did you indulge? If so, please insert a comma between each item.'
}).appendTo(dessertComposite);

let dessertInput = new Input('prev() 10', 15, 15, 30, 'What did you treat yourself with?', true, "send", (text: string) => {
    let userInput: string = text;
    let now = moment().format('LLLL');
    if (userInput.length >= 3) {
        localStorage.clear();
        localStorage.setItem(`Dessert`, `${userInput}`);
        renderSuccessMessage();
        setTimeout(resetInputFeedback, 300)
    } else {
        renderFailedSaveInfo();
        setTimeout(resetInputFeedback, 3000)
    }
}).appendTo(dessertComposite);

let addDessertButton = new AddMealButton('DessertButton', 'Add My Dessert', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let dessert: string = dessertInput.text;
    let now = moment().format('LLLL');
    if (dessert.length >= 3) {
        localStorage.clear();

        localStorage.setItem(`Dessert`, `${dessert}`);
        renderSuccessMessage();
        setTimeout(resetInputFeedback, 300)
    } else {
        renderFailedSaveInfo();
        setTimeout(resetInputFeedback, 3000)
    }
}).appendTo(dessertComposite);

export default dessertComposite;