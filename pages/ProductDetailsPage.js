
const { test, expect } = require("@playwright/test");
exports.ProductDetailsPage = class ProductDetailsPage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.productPriceMac = page.locator("span[id*='price-value']", { hasText: "$1,800.00" });
        this.productPriceLumia = page.locator("span[id*='price-value']", { hasText: "$349.00" });
        this.productQuantity = page.locator('input[id*="product_enteredQuantity"]');
        this.addToCart = page.locator("button", { hasText: "Add to cart" }).nth(0);
        this.successMessage = page.locator("div.bar-notification.success");
        this.subscribe = page.locator("button", { hasText: "Subscribe" });
        this.newsletterEmail = page.locator('input[id*="news"]');

    }
}