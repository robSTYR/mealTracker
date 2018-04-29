"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
class AppComposite extends tabris_1.Composite {
    constructor(top, left, right, bottom, background) {
        super({ top, left, right, bottom, background });
    }
}
exports.default = AppComposite;
;
