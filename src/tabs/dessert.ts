import { Tab } from 'tabris';
import dessertComposite from '../User_Interfaces/dessertUI' ;

const dessertTab = new Tab({
    title: 'Dessert',
    image: {src: 'src/images/cakeIcon.png', scale: 1.5}
});

dessertComposite.appendTo(dessertTab);

export default dessertTab;
