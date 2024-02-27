const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    //Elements Home Page
    get iconCart () { return $('.shopping_cart_link');}
    get buttonBackPack () { return $('#add-to-cart-sauce-labs-backpack');}
    get buttonRemove () { return $('#remove-sauce-labs-backpack');}
    get buttonCart () { return $('#shopping_cart_container');}
    get buttonLogout () { return $('#logout_sidebar_link');}
    get buttonBurger () { return $('#react-burger-menu-btn');}
    //Elements Information Page
    get buttonCheckout () { return $('#checkout');}
    get fieldName () { return $('#first-name');}
    get fieldLastName () { return $('#last-name');}
    get fieldZip () { return $('#postal-code');}
    get buttonContinue () { return $('#continue');}
    get buttonFinish () { return $('#finish');}
    get buttonBackHome () { return $('#back-to-products');}
    errorInformation = (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)
    

    //validate Home Page
    async validateHomePage() {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(this.iconCart).toBeDisplayed()
    }

    async validateGlitchUser () {
        await this.buttonBurger.click();
        await this.buttonLogout.click();

    }
    //validate Information Page
    async validateAddCart() {
        await this.buttonBackPack.click()
        await this.buttonRemove.click()
        await this.buttonBackPack.click()
    }

    async validateCart() {
        await this.buttonCart.click()
    }

    async validateCheckout() {
        await this.buttonCheckout.click()
    }

    async Information () {
        await this.fieldName.setValue(process.env.NAME);
        await this.fieldLastName.setValue(process.env.LAST_NAME);
        await this.fieldZip.setValue(process.env.ZIP);
        await this.buttonContinue.click()
        await this.buttonFinish.click()
        await this.buttonBackHome.click()
        await this.buttonBurger.click()
        await this.buttonLogout.click()
    }

    async validateerrorInformation(message,fieldLastName) {
        await this.fieldName.setValue(process.env.NAME);
       
        await this.fieldZip.setValue(process.env.ZIP);
        await this.buttonContinue.click()
        await this.errorInformation(message).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorInformation(message)).toBeDisplayed()
    }
    open () {
        return super.open('https://www.saucedemo.com/inventory.html');
    }
}

module.exports = new HomePage();