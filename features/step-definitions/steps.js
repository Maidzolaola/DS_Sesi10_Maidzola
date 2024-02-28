const { Given, When, Then } = require ('@wdio/cucumber-framework');

const LoginPage = require ('../pageobjects/login.page.js');
const HomePage = require ('../pageobjects/home.page.js');


//steps for Login Page
Given(/^Maidzola is on the Login page$/, async () => {
    await LoginPage.open()
})

When(/^Maidzola Login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then (/^Maidzola should see error "(.*)"$/, async (message) => {
    await LoginPage.validateLockedOutUserError(message)
})
Then (/^Maidzola Login with password "(.*)" credential$/, async (message) => {
    await LoginPage.validateerrorPassword(message)
})


//steps for Home Page
Then(/^Maidzola should see home page$/, async () => {
    await HomePage.validateHomePage()
})

When(/^Maidzola taps on add cart button$/, async () => {
    await HomePage.validateAddCart()
})

Then(/^successfully add to cart$/, async () => {
    await HomePage.validateCart()
})

When(/^Maidzola taps on checkout button$/, async () => {
    await HomePage.validateCheckout()
})

Then(/^Maidzola is on information page$/, async () => {
    await HomePage.Information()
})

Then(/^Maidzola is on Error first name$/, async () => {
    await HomePage.errorname()
})

Then(/^Maidzola is on Error last name$/, async () => {
    await HomePage.errorlastname()
})

Then(/^Maidzola is on Error ZIP$/, async () => {
    await HomePage.errorzip()
})