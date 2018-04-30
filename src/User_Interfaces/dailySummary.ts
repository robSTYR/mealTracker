import {CollectionView, TextView, ImageView, ui} from "tabris";

import AppComposite from "../components/composite";

export enum categoryTypes {
    breakfast = 'Breakfast',
    lunch = 'Lunch',
    dinner = 'Dinner',
    dessert = 'Dessert',
};
let foodDataArr: [{name: string, cals: number}];


let dataFromStorage;
const grabDataFromStorage = (searchTerm: string): string => {
     dataFromStorage = localStorage.getItem(searchTerm);
     console.log(`dataStorage: ${dataFromStorage}`);
     return dataFromStorage;
};

const fetchDataFromApi = (text: string)  => {
    let foodName;
    let calories;
    fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${text}`,
        {
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
            let foodObj: { name: string, cals: number } = {name: '', cals: 0};
            foodObj.name = foodName;
            foodObj.cals = calories;
            foodDataArr.push(foodObj);
            return foodDataArr;
        }).then(() => {
        let dataCollecionView = new CollectionView({
            left: 0, top: 'prev() 10', right: 0, bottom: '0',
            itemCount: foodDataArr.length;
    })
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

let dailySummaryComposite = new AppComposite(0, 0, 0, 0, '#ffffff');

let dailySummaryCursive = new ImageView({
    left: 10, top: 10, right: 10, height: 200,
    image: 'src/images/dailySummaryCursive.png',
    background: '#ffffff'
}).appendTo(dailySummaryComposite);

export default dailySummaryComposite;
