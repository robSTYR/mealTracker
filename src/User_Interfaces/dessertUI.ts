import AppComposite from '../components/composite';
import Input from '../components/textInput';
import AddMealButton from '../components/button';
import MealInput from '../components/mealInput';
import {TextView, ImageView} from "tabris";
import * as moment from 'moment';
import {categoryTypes} from "./dailySummary";
const fetchedFoddArr = [];


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

let dessertInput = new MealInput('prev() 10', 15, 15, 30, 'What did you treat yourself with?', dessertTextView, true, "send", (text: string) => {
    let userInput: string = text;
    dessertInput.saveData(categoryTypes.breakfast, dessertTextView, userInput);
}).appendTo(dessertComposite);

let addDessertButton = new AddMealButton('DessertButton', 'Add My Dessert', '#ffffff', '#1cef71', 2, 2, 'prev() 20', () => {
    let dessert: string = dessertInput.text;
    dessertInput.saveData(categoryTypes.dessert, dessertTextView, dessert);
}).appendTo(dessertComposite);

export default dessertComposite;