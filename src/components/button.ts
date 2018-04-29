import {Button, Composite} from "tabris";

export default class AddMealButton extends Button {

    constructor(name: string, text: string, textColor: string, background: string, left: number, right: number, top: string,  callback: () => void) {
        super({text, textColor, background, left, right, top});
        this.on({select: callback});
    }

    public set _text(text: string) {
        this.text = text;
    }
}
