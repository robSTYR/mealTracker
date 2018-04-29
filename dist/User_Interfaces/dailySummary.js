"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const moment = require("moment");
const composite_1 = require("../components/composite");
let foodName;
let calories;
const categoryTypes = {
    breakfast: `Breakfast - `,
    lunch: `Lunch - `,
    dinner: `Dinner - `,
    dessert: `Dessert - `
};
const now = moment().format("MMM Do YY");
let dataFromStorage;
const grabDataFromStorage = (date, type) => {
    let searchKey = type + date;
    dataFromStorage = localStorage.getItem(searchKey);
    return dataFromStorage;
};
const fetchDataFromApi = (text) => {
    fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${text}`, {
        headers: {
            "x-app-id": "99853ada",
            "x-app-key": "eabf89a4f19c90c12ee26bbe9807d9b4"
        }
    }).then((response) => response.json())
        .catch((error) => {
        console.error(error);
    })
        .then((json) => {
        console.log(json.branded[0]);
        foodName = json.branded[0].food_name;
        calories = json.branded[0].nf_calories;
        let foodObj = { name: '', cals: 0 };
        foodObj.name = foodName;
        foodObj.cals = calories;
        console.log(foodObj);
    });
};
let breakfastFoodFromStorage = grabDataFromStorage(now, categoryTypes.breakfast);
let lunchFromStorage = grabDataFromStorage(now, categoryTypes.lunch);
let dinnerFromStorage = grabDataFromStorage(now, categoryTypes.dinner);
let dessertFromStorage = grabDataFromStorage(now, categoryTypes.dessert);
fetchDataFromApi(breakfastFoodFromStorage);
fetchDataFromApi(dinnerFromStorage);
fetchDataFromApi(lunchFromStorage);
fetchDataFromApi(dessertFromStorage);
let dailySummaryComposite = new composite_1.default(0, 0, 0, 0, '#ffffff');
let dailySummaryCursive = new tabris_1.ImageView({
    left: 10, top: 10, right: 10, height: 200,
    image: 'src/images/dailySummaryCursive.png',
    background: '#ffffff'
}).appendTo(dailySummaryComposite);
exports.default = dailySummaryComposite;
