const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { CustomerPage} = require('../pages/CustomerPage.js');
const { RegisterPage  } = require('../pages/RegisterPage.js');
const { LoginPage } = require('../pages/LoginPage.js');
const {data} = require('../data/data.js');
const randomNumber = String(Math.floor(Math.random() * 100000))
const userEmail = 'tester0001'+randomNumber+'@testing01.com';
test.describe.serial('Register service @smoke @register', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.nopcommerce.com/');
        const homePage = new HomePage(page);
        await expect(homePage.subTitleHeader).toBeVisible({timeout:15000});
    });
    test('Register User', async ({ page}) => {
        const homePage = new HomePage(page);
        const customerPage = new CustomerPage(page);
        const registerPage  = new RegisterPage (page);
        const loginPage  = new LoginPage (page);

        await (homePage.registerLink).click()
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
        // await (homePage.logoutLink).click()
        });
    test('User Negative Login Test', async ({ page}) => {
        const homePage = new HomePage(page);
        const customerPage = new CustomerPage(page);
        const registerPage  = new RegisterPage (page);
        const loginPage  = new LoginPage (page);

        await (homePage.loginLink).click()
        await expect(loginPage.accountHeader).toBeVisible()
        await (loginPage.emailInput).fill(userEmail)
        await (loginPage.passwordInput).fill(data.wrongpassword)
        await (loginPage.submitButton).click()
        await expect(loginPage.warning,"Login was unsuccessful").toBeVisible()
        });

    test('User Login Test', async ({ page}) => {
        const homePage = new HomePage(page);
        const customerPage = new CustomerPage(page);
        const registerPage  = new RegisterPage (page);
        const loginPage  = new LoginPage (page);

        await (homePage.loginLink).click()
        await expect(loginPage.accountHeader).toBeVisible()
        await (loginPage.emailInput).fill(userEmail)
        await (loginPage.passwordInput).fill(data.password)
        await (loginPage.submitButton).click()
        await (homePage.myAccountLink).click()
        await expect(customerPage.ordersLink).toBeVisible()
        await (customerPage.ordersLink).click()
        await expect(customerPage.noOrderslabel).toBeVisible()
            
    });
});