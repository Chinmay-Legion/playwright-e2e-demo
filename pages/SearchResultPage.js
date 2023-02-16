
const { test, expect } = require("@playwright/test");
exports.SearchResultPage = class SearchResultPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.productItem = page.locator("div.product-item");
        this.productTitleMac = page.locator("a", { hasText: "Apple MacBook Pro 13-inch" });
        this.productTitleLumia = page.locator("a", { hasText: "Nokia Lumia 1020" });
    }
}