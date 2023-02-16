locators = {
  "username_input": "#user-name",
  "password_input": "#password",
  "login_button": "#login-button",
  "inventory_container": "#inventory_container"
}

const { test, expect,Page,locator } = require("@playwright/test");


exports.RegisterPage = class RegisterPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

 async navigateToLoginScreen() {
  return await this.page.goto('https://demo.nopcommerce.com/register');
 }

 async GenderButton(){
  return await this.page.locator('#gender-male')
 }

 async submitLoginForm() {
   const element = await page.waitForSelector(locators.username_input);
   await page.fill(locators.username_input,'standard_user');
   await page.fill(locators.password_input,'secret_sauce');
   await page.click(locators.login_button);
 }

 async verifyAfterLoginPage() {
   await page.waitForSelector(locators.inventory_container);
   const visible = await page.isVisible(locators.inventory_container);
   return expect(visible).to.equal(true);
 }
}
