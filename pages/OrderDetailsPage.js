const { test, expect } = require("@playwright/test");
exports.OrderDetailsPage = class OrderDetailsPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.pdfInvoiceButton = page.locator('a[class*="pdf-invoice"]')
        this.productName = page.locator('td[class*="product"] a[href]')
    }
}