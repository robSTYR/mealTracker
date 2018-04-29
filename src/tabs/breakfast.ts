import { Tab } from 'tabris';
import breakfastComposite from '../User_Interfaces/breakfastUI';

const breakfastTab = new Tab({
    title: 'Breakfast',
    image: {src: 'src/images/breakfastIcon.png', scale: 1.5}

});

breakfastComposite.appendTo(breakfastTab);

export default breakfastTab;
