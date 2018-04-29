"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
const breakfast_1 = require("./tabs/breakfast");
const lunch_1 = require("./tabs/lunch");
const dinner_1 = require("./tabs/dinner");
const dessert_1 = require("./tabs/dessert");
const dailySummary_1 = require("./tabs/dailySummary");
const tabs = [breakfast_1.default, lunch_1.default, dinner_1.default, dessert_1.default, dailySummary_1.default];
let navigationView = new tabris_1.NavigationView({
    left: 0, top: 0, right: 0, bottom: 0
}).appendTo(tabris_1.ui.contentView);
let page = new tabris_1.Page({
    title: 'Meal Tracker'
}).appendTo(navigationView);
let tabFolder = new tabris_1.TabFolder({
    left: 0, top: 10, right: 0, bottom: 10
}).appendTo(page);
const appendTabs = (tabs, parentFolder) => {
    tabs.forEach((tab) => {
        tab.appendTo(tabFolder);
    });
};
appendTabs(tabs, tabFolder);
