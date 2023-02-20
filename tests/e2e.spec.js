const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { CustomerPage} = require('../pages/CustomerPage.js');
const { RegisterPage  } = require('../pages/RegisterPage.js');
const { LoginPage } = require('../pages/LoginPage.js');
const { CartPage } = require('../pages/CartPage.js');
const { CheckOutPage } = require('../pages/CheckOutPage.js');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage.js');
const { SearchResultPage } = require('../pages/SearchResultPage.js');
const { OrderDetailsPage } = require('../pages/OrderDetailsPage.js');
const {data} = require('../data/data.js');
const randomNumber = String(Math.floor(Math.random() * 100000))
const userEmail = 'tester0001'+randomNumber+'@testing01.com';


test.describe('e2e', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.nopcommerce.com/');
        const homePage = new HomePage(page);
        await expect(homePage.subTitleHeader).toBeVisible({timeout:15000});
    });


    test('e2e Test @e2e', async ({ page}) => {
        const homePage = new HomePage(page);
        const registerPage  = new RegisterPage (page);
        const loginPage  = new LoginPage (page);
        const cartPage  = new CartPage (page);
        const checkOutPage  = new CheckOutPage (page);
        const searchResultPage = new SearchResultPage(page);
        const productDetailsPage  = new ProductDetailsPage (page);
        const orderDetailsPage  = new OrderDetailsPage (page);


//REGISTER USER 
        await (homePage.registerLink).nth(0).click()
        await expect(page).toHaveURL(/register/)
        await (registerPage.GenderOption).click()
        await (registerPage.FirstName).fill(data.firstname)
        await (registerPage.LastName).fill(data.lastname)
        await registerPage.selectDay(data.birthday);
        // console.log(typeof data.birthday)
        await registerPage.selectMonth(data.birthmonth);
        await registerPage.selectYear(data.birthyear);
        await (registerPage.Email).fill(userEmail)
        await (registerPage.Password).fill(data.password)
        await (registerPage.ConfirmPassword).fill(data.password) 
        await (registerPage.RegisterButton).click()
        await expect(registerPage.SuccessfulMessage,"Your registration completed").toBeVisible()



//LOGIN USER
        await (homePage.loginLink).click()
        await expect(loginPage.accountHeader).toBeVisible()
        await (loginPage.emailInput).fill(userEmail)
        await (loginPage.passwordInput).fill(data.password)
        await (loginPage.submitButton).click()

        
// SEARCH FOR PRODUCT
        await homePage.search('Apple MacBook Pro 13-inch');
        await (searchResultPage.productTitleMac).click();
        await expect(page).toHaveURL(/apple-macbook-pro-13-inch/);
        await expect(productDetailsPage.productPriceMac).toBeVisible();


// ADD TO CART
        await (productDetailsPage.productQuantity).fill("3")
        await (productDetailsPage.addToCart).click()
        await expect(productDetailsPage.successMessage).toBeVisible()


//CHECKOUT
        await (homePage.cartLink).nth(0).click()
        await (cartPage.termsLabel).click()
        await (cartPage.checkoutButton).click()
        await expect(page).toHaveURL(/checkout/)
        await checkOutPage.selectCountry(data.country);
        await (checkOutPage.city).fill(data.city)
        await (checkOutPage.address).fill(data.address)
        await (checkOutPage.zipCode).fill(data.zip)
        await (checkOutPage.phoneNumber).fill(data.phone)
        await (checkOutPage.addressContinueButton).nth(0).click()
        await (checkOutPage.shippingContinueButton).nth(0).click()
        await (checkOutPage.paymentContinueButton).nth(0).click()
        await (checkOutPage.infoContinueButton).nth(0).click()
        await (checkOutPage.confirmButton).nth(0).click()
        await expect(checkOutPage.confirmationMessage).toBeVisible();
        await (checkOutPage.viewOrderDetailsLink).click()


//ORDER DETAILS & DOWNLOAD
        await expect(page).toHaveURL(/orderdetails\/\S+/)
        await expect(orderDetailsPage.productName).toContainText(/Apple MacBook Pro 13-inch/)
        const downloadPromise = page.waitForEvent('download');
        await (orderDetailsPage.pdfInvoiceButton).click()
        const download = await downloadPromise;
        console.log(await download.path());
        await download.saveAs('./invoice.pdf'); // "change to .\invoice.pdf for windows system filepath"
    });
});