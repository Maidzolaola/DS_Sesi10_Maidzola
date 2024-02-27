@login_negative
Feature: Swag Lab - Login
  Background: User on the Login page 
  Given Maidzola is on the Login page


@negative_login_1
  Scenario Outline: As a standard_user , I want to Log in successfully
    When Maidzola Login with "locked_out_user" credential
    Then Maidzola should see error "Epic sadface: Sorry, this user has been locked out."

@negative_login_2
  Scenario Outline: As a standard_user , I want to Log in successfully
    When Maidzola Login with "" credential
    Then Maidzola should see error "Epic sadface: Username is required"    

@negative_login_3
  Scenario Outline: As a standard_user , I want to Log in successfully
    When Maidzola Login with password "" credential
    Then Maidzola should see error "Epic sadface: Password is required"  