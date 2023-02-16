
const { test, expect } = require("@playwright/test");
exports.RegisterPage = class RegisterPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.GenderOption = page.locator('#gender-male')
        this.FirstName = page.locator('#FirstName')
        this.LastName = page.locator('#LastName')
        this.DateOfBirthDayList = page.locator("select[name='DateOfBirthDay']")
        this.DateOfBirthMonthList = page.locator("select[name='DateOfBirthMonth']")
        this.DateOfBirthYearList = page.locator("select[name='DateOfBirthYear']")
        this.Email = page.locator('#Email')
        this.Password = page.locator('#Password')
        this.ConfirmPassword = page.locator('#ConfirmPassword')
        this.RegisterButton = page.locator('#register-button.button-1.register-next-step-button')
        this.SuccessfulMessage = page.locator('div.result',{hasText:"Your registration completed"})
    }
    
    async selectDay(day){
        const DayOption = this.DateOfBirthDayList.filter({has:this.page.locator('option')}).selectOption({ label: day });
        await this.DateOfBirthDayList.click()
        await DayOption
    }

    async selectMonth(month){
        const MonthOption = this.DateOfBirthMonthList.filter({has:this.page.locator('option')}).selectOption({ label: month});
        await this.DateOfBirthMonthList.click()
        await MonthOption
    }

    async selectYear(year){
        const YearOption = this.DateOfBirthYearList.filter({has:this.page.locator('option')}).selectOption({ label: year});
        await this.DateOfBirthYearList.click()
        await YearOption
    }

}