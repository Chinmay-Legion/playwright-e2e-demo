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
    test('Search for products and subscribe to newsletter @smoke @search', async ({ page }) => {
        const homePage = new HomePage(page);
        const searchResultPage = new SearchResultPage(page);
        const productDetailsPage  = new ProductDetailsPage (page);


        await test.step(`Search for "Nokia Lumia"`, async () => {
            await expect(homePage.searchBox).toBeVisible()
            await homePage.search('Nokia Lumia');
            await (searchResultPage.productTitleLumia).click();
            await expect(page).toHaveURL(/lumia/);
        })


        await test.step(`Enter prodcut quantity(3)`, async () => {
            await expect(productDetailsPage.productPriceLumia).toBeVisible();
            await (productDetailsPage.productQuantity).fill("3");
            await expect(productDetailsPage.addToCart).toBeVisible();
        })


        await test.step(`Search for "Apple MacBook Pro 13-inch"`, async () => {
            await (homePage.searchBox).hover();
            await homePage.search('Apple MacBook Pro 13-inch');
            await (searchResultPage.productTitleMac).click();
            await expect(page).toHaveURL(/apple-macbook-pro-13-inch/);
        })


        await test.step(`Enter prodcut quantity(5)`, async () => {
            await expect(productDetailsPage.productPriceMac).toBeVisible();
            await (productDetailsPage.productQuantity).fill("5");
            await expect(productDetailsPage.addToCart).toBeVisible();
        })


        await test.step(`subcribe to newsletter`, async () => {
            await (productDetailsPage.subscribe).hover();
            await (productDetailsPage.newsletterEmail).fill("randometest@gmail.com")
            await (productDetailsPage.subscribe).click();
        })

    });
});