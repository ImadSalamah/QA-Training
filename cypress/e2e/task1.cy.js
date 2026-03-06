/// <reference types="cypress" />

describe('verify login functionality in saucedemo', () => {
    
    it('should login with valid credentials', () => {
        
        cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    });
 it('get the facebook button using selectors', () => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get(".social").first().click()
    
 });
});