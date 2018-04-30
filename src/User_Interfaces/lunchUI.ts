import {ImageView, TextView} from "tabris";
import AppComposite from '../components/composite';
import AddMealButton from '../components/button';
import MealInput from "../components/mealInput";
import {categoryTypes} from "./dailySummary";

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

let lunchMealInput = new MealInput('prev() 10', 15, 15, 30, 'What did you eat for lunch?', lunchTextView, true, "send", (text: string) => {
    let userInput: string = text;
    lunchMealInput.saveData(categoryTypes.lunch, lunchTextView, userInput);
}).appendTo(lunchComposite);

let addLunchButton = new AddMealButton('lunchButton', 'Add My Lunch', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let lunch: string = lunchMealInput.text;
    lunchMealInput.saveData(categoryTypes.lunch, lunchTextView, lunch);
}).appendTo(lunchComposite);

export default lunchComposite;
