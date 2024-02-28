@homepage_negative
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
    When Maidzola is on Error first name
    Then Maidzola should see error "Error: First Name is required"
    And Maidzola is on information page


@negative_homepage_2
Scenario Outline: As a standard_user , I want to Fill Information Fields
    When Maidzola taps on add cart button
    And successfully add to cart
    And Maidzola taps on checkout button
    When Maidzola is on Error last name
    Then Maidzola should see error "Error: Last Name is required"
    And Maidzola is on information page    


@negative_homepage_3
Scenario Outline: As a standard_user , I want to Fill Information Fields
    When Maidzola taps on add cart button
    And successfully add to cart
    And Maidzola taps on checkout button
    When Maidzola is on Error ZIP
    Then Maidzola should see error "Error: Postal Code is required"