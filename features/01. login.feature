@login
Feature: Swag Lab - Login
  Background: User on the Login page 
  Given Maidzola is on the Login page

  @positive_login_1
  Scenario: As a standard_user , I want to Log in successfully
    When Maidzola Login with "standard_user" credential
    Then Maidzola should see home page

  @positive_login_2
  Scenario: As a standard_user , I want to Log in successfully
    When Maidzola Login with "problem_user" credential
    Then Maidzola should see home page   

  @positive_login_3
  Scenario: As a standard_user , I want to Log in successfully
    When Maidzola Login with "performance_glitch_user" credential
    Then Maidzola should see home page  
     
  @positive_login_4
  Scenario: As a standard_user , I want to Log in successfully
    When Maidzola Login with "error_user" credential
    Then Maidzola should see home page

  @positive_login_5
  Scenario: As a standard_user , I want to Log in successfully
    When Maidzola Login with "visual_user" credential
    Then Maidzola should see home page  
  

   
  
