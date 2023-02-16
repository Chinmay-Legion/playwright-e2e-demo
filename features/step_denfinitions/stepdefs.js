const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const {RegisterPage} = require('../../pages_cucumber/RegisterPage.js');
const registerPage = new RegisterPage();

const URL = 'https://demo.nopcommerce.com/register'; 
var randomNumber = Math.floor(Math.random() * 10000);
Given('I open the registration page', async function () {
  await registerPage.navigateToLoginScreen();
});

  When('I select the gender', async function () {
    await registerPage.GenderButton(); 
  });

  When('I enter First Name {string}', async function (firtname) {
    await typeText(registerPage.RegisterPage.Firstname(),firtname);
  });

  When('I enter Last Name {string}', async function (lastname) {
    await typeText(registerpage.RegisterPage.Lastname(),lastname);
  });

  When('I select Date of Birth {string}', async function (day) {
    await click(registerpage.RegisterPage.DateOfBirth());
    await click(registerpage.RegisterPage.ListOption().withText(day))
  });

  When('I select Month of Birth {string}', async function (month) {
    await click(registerpage.RegisterPage.MonthOfBirth());
await click(registerpage.RegisterPage.ListOption().withText(month));
  });

  When('I select Year of Birth {string}', async function (year) {
    await click(registerpage.RegisterPage.YearOfBirth());
    await click(registerpage.RegisterPage.ListOption().withText(year));
  });

  When('I enter Email {string}', async function (email) {
    await typeText(registerpage.RegisterPage.Email(),email+randomNumber+"@test.com");

  });

  When('I enter Password {string}', async function (password) {
        await typeText(registerpage.RegisterPage.Password(),password);

  });

  When('I enter Confirm Password {string}', async function (password) {
     await typeText(registerpage.RegisterPage.ConfirmPassword(),password);

  });
  When('I click register button', async function () {
    await click(registerpage.RegisterPage.RegistrationButton()); 

  });

  Then('successful message is displayed', async function () {
    await expect(registerpage.RegisterPage.SuccessfullMessage().exists).ok;
  });