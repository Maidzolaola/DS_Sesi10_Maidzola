@digital-skola @homepage
Feature: Swag Lab - Home Page

Background: User can Check Out Product
  Given Maidzola is on the Login page
  When Maidzola Login with "standard_user" credential
  Then Maidzola should see home page
  
@positive_homepage_1
Scenario Outline: As a standard_user , I want to checkout a product
    And Maidzola taps on add cart button
    Then successfully add to cart


@positive_homepage_2
Scenario Outline: As a standard_user , I want to checkout a product
    And Maidzola taps on add cart button
    And successfully add to cart
    Then Maidzola taps on checkout button
    
@positive_homepage_3
Scenario Outline: As a standard_user , I want to Fill Information Fields
    When Maidzola taps on add cart button
    And successfully add to cart
    When Maidzola taps on checkout button
    Then Maidzola is on information page

@positive_homepage_4
Scenario Outline: As a standard_user , I want to Fill Information Fields
    When Maidzola taps on add cart button
    And successfully add to cart
    When Maidzola taps on checkout button
    Then Maidzola is on information page    