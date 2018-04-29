import {TextInput} from "tabris";

export default class Input extends TextInput {
    constructor(top: string, left: number, right: number, height: number, message: string, autoCorrect: boolean, enterKeyType: "default" | "done" | "go" | "next" | "search" | "send",  callback: (text: string) => void) {
        super({top, left, right, message, autoCorrect, enterKeyType});

        this.on({ accept: () => callback(this.text)});
    }

    public set _text(text: string) {
        this.text = text;
    }
}
