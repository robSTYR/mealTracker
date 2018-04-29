"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const dailySummary_1 = require("../User_Interfaces/dailySummary");
const dailySummaryTab = new tabris_1.Tab({
    title: 'Daily Summary',
    image: { src: 'src/images/kcal.png', scale: 1.5 }
});
dailySummary_1.default.appendTo(dailySummaryTab);
exports.default = dailySummaryTab;
