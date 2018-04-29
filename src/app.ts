import {Page, TabFolder, Button, NavigationView, ui, Tab} from "tabris";
import breakfast from './tabs/breakfast';
import lunch from './tabs/lunch';
import dinner from './tabs/dinner';
import dessert from './tabs/dessert';
import dailySummary from './tabs/dailySummary';

const tabs = [breakfast, lunch, dinner, dessert, dailySummary];

let navigationView = new NavigationView({
    left: 0, top: 0, right: 0, bottom: 0
}).appendTo(ui.contentView);

let page = new Page ({
    title: 'Meal Tracker'
}).appendTo(navigationView);

let tabFolder = new TabFolder({
    left: 0, top: 10, right: 0, bottom: 10
}).appendTo(page);

const appendTabs = (tabs: Tab[], parentFolder: TabFolder) => {
    tabs.forEach((tab: any) => {
        tab.appendTo(tabFolder);
    });
};
appendTabs(tabs, tabFolder);