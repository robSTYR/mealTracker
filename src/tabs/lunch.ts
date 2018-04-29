import { Tab } from 'tabris';
import lunchComposite from '../User_Interfaces/lunchUI';

const lunch = new Tab({
    title: 'Lunch',
    image: {src: 'src/images/lunchIcon.png', scale: 1.5}

});
lunchComposite.appendTo(lunch);
export default lunch;
