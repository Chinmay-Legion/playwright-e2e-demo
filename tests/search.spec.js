const { test, expect,devices } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { SearchResultPage } = require('../pages/SearchResultPage.js');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage.js');

test.describe('Search service', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.nopcommerce.com/');
        const homePage = new HomePage(page);
        await expect(homePage.subTitleHeader).toBeVisible({timeout:15000});
    });
    test('Search different products and subscribe newsletter @smoke @search', async ({ page }) => {
        const homePage = new HomePage(page);
        const searchResultPage = new SearchResultPage(page);
        const productDetailsPage  = new ProductDetailsPage (page);
        await homePage.search('Nokia Lumia');
        await (searchResultPage.productTitleLumia).click();
        await expect(page).toHaveURL(/lumia/);
        await expect(productDetailsPage.productPriceLumia).toBeVisible();
        await (productDetailsPage.productQuantity).fill("3");
        await (productDetailsPage.subscribe).hover();
        await (homePage.searchBox).hover();

        await homePage.search('Apple MacBook Pro 13-inch');
        await (searchResultPage.productTitleMac).click();
        await expect(page).toHaveURL(/apple-macbook-pro-13-inch/);
        await expect(productDetailsPage.productPriceMac).toBeVisible();
        await (productDetailsPage.productQuantity).fill("5");
        await (productDetailsPage.subscribe).hover();
        await (productDetailsPage.newsletterEmail).fill("randometest@gmail.com")
        await (productDetailsPage.subscribe).click();
    });
});