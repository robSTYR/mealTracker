import {ImageView, TextView} from "tabris";
import * as moment from 'moment';
import AppComposite from '../components/composite';
import Input from '../components/textInput';
import AddMealButton from '../components/button';

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

let dinnerComposite = new AppComposite(0, 0, 0, 0, '#ffffff');

let dinnerCursiveImage = new ImageView({
    left: 10, top: 10, right: 10,  height: 200,
    image: 'src/images/dinnerCursive.png',
    background: '#ffffff'
}).appendTo(dinnerComposite);

let dinnerImage = new ImageView({
    left: 10, top: 'prev() -40', right: 10, height: 200,
    image: 'src/images/dinner_adobe.jpeg',
    background: '#ffffff',
}).appendTo(dinnerComposite);

let dinnertextView: TextView = new TextView({
    left: 15, right: 15, top: 'prev() 20',
    alignment: 'center',
    text: 'Enter what you ate for Dinner, each item separated by a comma'
}).appendTo(dinnerComposite);

let dinnerMealInput = new Input('prev() 10', 15, 15, 30, 'What did you eat?', true, "send", (text) => {
    let userInput: string = text;
    let now = moment().format('LLLL');
    if (userInput.length >= 3) {
        localStorage.clear();

        localStorage.setItem('Dinner', `${userInput}`);
        renderSuccessMessage();
        setTimeout(resetInputFeedback, 3000)
    } else {
        renderFailedSaveInfo();
        setTimeout(resetInputFeedback, 3000)
    }
}).appendTo(dinnerComposite);

let addDinnerButton = new AddMealButton('dinnerButton', 'Add My Dinner', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let dinner: string = dinnerMealInput.text;
    if (dinner.length >= 3) {
        localStorage.clear();

        localStorage.setItem('Dinner', `${dinner}`);
        renderSuccessMessage();
        setTimeout(resetInputFeedback, 3000);
    } else {
        renderFailedSaveInfo();
        setTimeout(resetInputFeedback, 3000);
    }
}).appendTo(dinnerComposite);


const fetchData = (text: string): void => {
    fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${text}`,
        {
            headers: {
                "x-app-id": "99853ada",
                "x-app-key": "eabf89a4f19c90c12ee26bbe9807d9b4"
            }
        }).then(response => response.json())
        .then((json) => {
            console.log(json.branded);
        });
};

export default dinnerComposite;