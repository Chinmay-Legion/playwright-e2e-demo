const { test, expect } = require("@playwright/test");
exports.CheckOutPage = class CheckOutPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page
        this.country = page.locator("#BillingNewAddress_CountryId")
        this.city = page.locator("#BillingNewAddress_City")
        this.address = page.locator("#BillingNewAddress_Address1")
        this.zipCode = page.locator("#BillingNewAddress_ZipPostalCode")
        this.phoneNumber = page.locator("#BillingNewAddress_PhoneNumber")
        this.addressContinueButton = page.locator("button.button-1.new-address-next-step-button")
        this.shippingContinueButton = page.locator("#shipping-method-buttons-container > button")
        this.paymentContinueButton = page.locator("#payment-method-buttons-container > button")
        this.infoContinueButton = page.locator("#payment-info-buttons-container > button")
        this.confirmButton = page.locator("#confirm-order-buttons-container > button")
        this.confirmationMessage = page.locator('strong',{hasText:'Your order has been successfully processed!'})
        this.viewOrderDetailsLink = page.locator('a',{hasText:'Click here for order details.'})
    }

    
    async selectCountry(countryName){
        const CountryOption = this.country.filter({has:this.page.locator('option')}).selectOption({ label: countryName });;
        await this.country.click()
        await CountryOption
    }
}
