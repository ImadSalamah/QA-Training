/// <reference types="cypress" />
// it is used to get the auto suggestions of cypress commands and also to avoid the errors in cypress test cases
/* 
* we have two ways to write our test cases in cypress
* 1. describe and it //gerken syntax //basic way to write test cases
* 2. (given, when, then ) cucumber syntax //advanced and more organized way to write test cases
*/

/** describe ('name of the test suite' , the function to execute we use arrow function) */

// suite (scenario) such as user story contains multiple test cases and we can have multiple suites in a project

describe('test suite', () => {

    /** it ('name of the test case' , the function to execute we use arrow function) */ 
    it('first test case', () => {
        cy.visit('https://www.google.com/')
        // we can make this two functions in one line as well
       
    }   )   
});

// dsp its a short cut to describe

/**
 * login test senario 
 * 1. visit the website
 * 2. click on the login button
 * 3. enter valid username and password
 * 4. click on the submit button
 * 5. verify that the user is logged in successfully
 * 6. enter invalid username and password
 * 7. click on the submit button
 * 8. verify that the user is not logged in and error message is displayed
 * 9. enter valid username and invalid password
 * 10. click on the submit button
 * 11. verify that the user is not logged in and error message is displayed
 * 12. enter invalid username and valid password
 * 13. click on the submit button
 * 14. verify that the user is not logged in and error message is displayed
 * 15. click on the logout button
 * 
 * these are the test cases for the login functionality containts psitive and negative test cases
 * 
 */
describe('login test suite', () => {
    it('successful login test case with valid credentials' , () => {
        cy.visit('https://automationexercise.com/login')
        cy.get('a[href="/login"]').click()
        cy.get('input[data-qa="login-email"]').type('ims@gmail.com')
        cy.get('input[data-qa="login-password"]').type('12345678')
        cy.get('button[data-qa="login-button"]').click()
        cy.get('a[href="/logout"]').should('be.visible')  
    })
    it ('unsuccessful login test case with invalid credentials' , () => {
        cy.visit('https://automationexercise.com/login')
        cy.get('a[href="/login"]').click()
        cy.get('input[data-qa="login-email"]').type('invalid@gmail.com')
        cy.get('input[data-qa="login-password"]').type('invalid123')
        cy.get('button[data-qa="login-button"]').click()
cy.contains('p', 'Your email or password is incorrect!')
  .should('have.css', 'color', 'rgb(255, 0, 0)')    })
  it ('unsuccessful login test case with valid email and invalid password' , () => {
    cy.visit('https://automationexercise.com/login')
    cy.get('a[href="/login"]').click()
    cy.get('input[data-qa="login-email"]').type('ims@gmail.com')
    cy.get('input[data-qa="login-password"]').type('invalid123')
    cy.get('button[data-qa="login-button"]').click()
cy.contains('p', 'Your email or password is incorrect!')
  .should('have.css', 'color', 'rgb(255, 0, 0)')    })
    it ('unsuccessful login test case with invalid email and valid password' , () => {
        cy.visit('https://automationexercise.com/login')
        cy.get('a[href="/login"]').click()
        cy.get('input[data-qa="login-email"]').type('invalid@gmail.com')
        cy.get('input[data-qa="login-password"]').type('12345678')
        cy.get('button[data-qa="login-button"]').click()
cy.contains('p', 'Your email or password is incorrect!')
  .should('have.css', 'color', 'rgb(255, 0, 0)')    })  
  
});
