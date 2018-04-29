import { Tab } from 'tabris';
import dinnerComposite from '../User_Interfaces/DinnerUI';

const dinnerTAb = new Tab({
    title: 'Dinner',
    image: {src: 'src/images/broccoli.png', scale: 1.5}
});

dinnerComposite.appendTo(dinnerTAb);

export default dinnerTAb;


