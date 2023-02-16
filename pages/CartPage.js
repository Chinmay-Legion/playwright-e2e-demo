const { test, expect } = require("@playwright/test");
exports.CartPage = class CartPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.termsLabel = page.locator('input#termsofservice')
        this.cartTotal = page.locator('td.cart-total-right')
        this.checkoutButton = page.locator('#checkout')
    }
}