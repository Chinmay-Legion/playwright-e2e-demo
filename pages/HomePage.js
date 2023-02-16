const { test, expect,Page,locator } = require("@playwright/test");


exports.HomePage = class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.subTitleHeader = page.locator('[class="topic-block-title"] h2', { hasText: 'Welcome to our store' });
        this.registerLink = page.locator("a",{hasText:'register'})
        this.myAccountLink = page.locator("a",{hasText:'My Account'}).nth(0)
        this.logoutLink = page.locator("a",{hasText:'Log out'})
        this.loginLink = page.locator("a",{hasText:'Log in'})
        this.cartLink = page.locator("a",{hasText:'Shopping cart'})
        this.currencyList = page.locator("select#customerCurrency")
        this.searchBox = page.locator("input[id='small-searchterms']");
    }

    async search(product){
        await this.searchBox.fill(product)
        await this.page.keyboard.press('Enter');
    }

    // async changeCurrency(currency){
    //     await t
    //         .click(this.currencyList)
    //         .click(Selector('option', {text: currency}));
    // }

}
