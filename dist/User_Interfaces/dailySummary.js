"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const composite_1 = require("../components/composite");
var categoryTypes;
(function (categoryTypes) {
    categoryTypes["breakfast"] = "Breakfast";
    categoryTypes["lunch"] = "Lunch";
    categoryTypes["dinner"] = "Dinner";
    categoryTypes["dessert"] = "Dessert";
})(categoryTypes || (categoryTypes = {}));
;
let dataFromStorage;
const grabDataFromStorage = (searchTerm) => {
    dataFromStorage = localStorage.getItem(searchTerm);
    console.log(`dataStorage: ${dataFromStorage}`);
    return dataFromStorage;
};
const fetchDataFromApi = (text) => {
    let foodName;
    let calories;
    let foodDataArr;
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
        foodName = json.branded[0].food_name;
        calories = json.branded[0].nf_calories;
        let foodObj = { name: '', cals: 0 };
        foodObj.name = foodName;
        foodObj.cals = calories;
        foodDataArr.push(foodObj);
        console.log(foodDataArr);
        return foodDataArr;
    });
};
let breakfastFoodFromStorage = grabDataFromStorage(categoryTypes.breakfast);
let lunchFromStorage = grabDataFromStorage(categoryTypes.lunch);
let dinnerFromStorage = grabDataFromStorage(categoryTypes.dinner);
let dessertFromStorage = grabDataFromStorage(categoryTypes.dessert);
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
