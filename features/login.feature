@digital-skola @login
Feature: Swag Lab - Login
  Background: User on the Login page 
  Given Ferawati is on the Login page

  @positive
  Scenario: As a standard_user , I want to Log in successfully
    When Ferawati Login with "standard_user" credential
    Then Ferawati should see home page

  @negative
  Scenario: As a standard_user , I want to Log in successfully
    When Ferawati Login with "locked_out_user" credential
    Then Ferawati should see error "Epic sadface: Sorry, this user has been locked out."



  
