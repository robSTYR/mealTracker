import {ImageView, LayoutData, TextInput, TextView} from "tabris";
import * as moment from 'moment';
import AppComposite from '../components/composite';
import Input from '../components/textInput';
import AddMealButton from '../components/button';
import {categoryTypes} from "./dailySummary";
import MealInput from "../components/mealInput";

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

let breakfastMealInput = new MealInput('prev() 10', 15, 15, 30, 'What did you eat?', breakfastTextView, true, "send", (text: string) => {
    let userInput: string = text;
    breakfastMealInput.saveData(categoryTypes.breakfast, breakfastTextView, userInput);
}).appendTo(breakfastComposite);

let addBreakfastbutton = new AddMealButton('breakfastButton', 'Add My Breakfast', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let breakfast: string = breakfastMealInput.text;
    breakfastMealInput.saveData(categoryTypes.breakfast, breakfastTextView, breakfast)
}).appendTo(breakfastComposite);

export default breakfastComposite;
