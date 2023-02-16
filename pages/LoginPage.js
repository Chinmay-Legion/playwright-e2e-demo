const { test, expect } = require("@playwright/test");
exports.LoginPage = class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.submitButton = page.locator("button.button-1.login-button");
        this.accountHeader = page.locator("strong",{hasText:"Returning Customer"})
        this.warning = page.locator('div[class*="message-error"]',{hasText:"Login was unsuccessful"})
    }
}