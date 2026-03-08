/// <reference types="cypress" />
describe('selectors examples', () => {

    it('find the username field by using his contain such as "username"', () => {
        cy.visit('/')
        cy.contains('secret_sauce')
    });
    
});