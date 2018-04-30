"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const textInput_1 = require("./textInput");
class MealInput extends textInput_1.default {
    constructor(top, right, left, bottom, textViewText, textView, autoCorrect, enterKeyType, resetInput) {
        super('prev() 10', 15, 15, 30, 'What did you eat?', true, "send", (text) => {
        });
        this.textView = textView;
        this.saveData = (mealType, textView, text) => {
            if (this.text.length >= 3) {
                localStorage.setItem(mealType, `${this.text}`);
                this.renderSuccessMessage(textView);
                setTimeout(this.resetInputFeedback, 3000);
            }
            else {
                this.renderFailedSaveInfo(textView);
                setTimeout(this.resetInputFeedback, 3000);
            }
        };
        this.renderFailedSaveInfo = (textView) => {
            this.borderColor = '#ff0c18';
            this.textView.text = 'Please add a meal with at least 3 letters!';
        };
        this.resetInputFeedback = (textView) => {
            this.text = '';
            this.borderColor = '#efefef';
            this.textView.text = 'What Did you eat?';
        };
    }
    ;
    renderSuccessMessage(textView) {
        this.textView.text = 'Your meal has been added to the Daily Summary\u2705';
        this.borderColor = '#1cef71';
    }
}
;
exports.default = MealInput;
