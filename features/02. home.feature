@homepage
Feature: Swag Lab - Home Page

Background: User can Check Out Product
  Given Maidzola is on the Login page
  When Maidzola Login with "standard_user" credential
  Then Maidzola should see home page
  
@positive_homepage_1
Scenario Outline: As a standard_user , I want to checkout a product
    When Maidzola taps on add cart button
    And successfully add to cart
    And Maidzola taps on checkout button
    Then Maidzola is on information page
