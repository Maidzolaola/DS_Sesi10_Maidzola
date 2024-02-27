const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
    //NOTE: elements collection
    get fieldUsername () { return $('#user-name');}
    get fieldPassword () {return $('#password');}
    get buttonLogin () { return $('#login-button');}
    errorLockedOutUser = (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)
    
    async login (username) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        if (username != "") await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }
    async validateerrorPassword(password) {
        await this.fieldUsername.setValue(process.env.USERNAME_STANDARD_USER);
        if (password != "") await this.fieldPassword.setValue(password);
        await this.buttonLogin.click();
    }
    
    async validateLockedOutUserError (message) {
        await this.errorLockedOutUser(message).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorLockedOutUser(message)).toBeDisplayed()
    }
    
    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();