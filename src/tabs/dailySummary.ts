import { Tab, TextInput, TextView, Button} from 'tabris';
import dailySummaryComposite from '../User_Interfaces/dailySummary';
const dailySummaryTab = new Tab({
    title: 'Daily Summary',
    image: {src: 'src/images/kcal.png', scale: 1.5}
});
dailySummaryComposite.appendTo(dailySummaryTab);
export default dailySummaryTab;
