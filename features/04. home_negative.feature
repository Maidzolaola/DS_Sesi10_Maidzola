@digital-skola @homepage_negative
Feature: Swag Lab - Home Page

Background: User can't Check Out Product
  Given Maidzola is on the Login page
  When Maidzola Login with "standard_user" credential
  Then Maidzola should see home page
  

@negative_homepage_1
Scenario Outline: As a standard_user , I want to Fill Information Fields
    When Maidzola taps on add cart button
    And successfully add to cart
    And Maidzola taps on checkout button
    And Maidzola is on Error Information
    Then Maidzola should see error "Error: Last Name is required"
