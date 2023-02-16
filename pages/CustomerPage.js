const { test, expect } = require("@playwright/test");
exports.CustomerPage = class CustomerPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.ordersLink = page.locator('a',{hasText:"Orders"}).nth(0)
        this.noOrderslabel = page.locator('div.no-data',{hasText:"Orders"})
    }

}
