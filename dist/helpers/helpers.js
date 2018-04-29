"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appendTabs = (tabList, parentFolder) => {
    tabList.forEach((tab) => {
        tab.appendTo(parentFolder);
    });
};
appendTabs;
