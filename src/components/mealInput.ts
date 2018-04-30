import Input from "./textInput";
import {categoryTypes} from "../User_Interfaces/dailySummary";
import {TextView} from "tabris";

class MealInput extends Input {
    constructor(top: string | number, right: string | number, left: string | number, bottom: string | number, textViewText: string,  private textView: TextView,  autoCorrect: boolean, enterKeyType: "default" | "done" | "go" | "next" | "search" | "send", resetInput: (text: string) => void) {
        super('prev() 10', 15, 15, 30, 'What did you eat?', true, "send", (text: string) => {
        });
    };
    public saveData = (mealType: categoryTypes, textView: TextView, text: string) => {
    if (this.text.length >= 3) {
    localStorage.setItem(mealType, `${this.text}`);
    this.renderSuccessMessage(textView);
    setTimeout(this.resetInputFeedback, 3000);
    } else {
    this.renderFailedSaveInfo(textView);
    setTimeout(this.resetInputFeedback, 3000);
    }
}

    public renderSuccessMessage(textView: TextView) {
        this.textView.text = 'Your meal has been added to the Daily Summary\u2705';
        this.borderColor = '#1cef71';
    }

    public renderFailedSaveInfo = (textView: TextView) => {
        this.borderColor = '#ff0c18';
        this.textView.text = 'Please add a meal with at least 3 letters!';
    }
    public resetInputFeedback = (textView: TextView) => {
        this.text = '';
        this.borderColor = '#efefef';
        this.textView.text = 'What Did you eat?';
    }
};

export default MealInput;