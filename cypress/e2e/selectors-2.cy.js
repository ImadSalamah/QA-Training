/// <reference types="cypress" />
describe('selectors examples', () => {

    it('find the username field by using his contain such as "username"', () => {
        cy.visit('/')
        cy.contains('secret_sauce')
        // if there are multiple elements with the same contain then it will select the first one and it may not be the one we want to select so we can use .first() to select the first one and .last() to select the last one and .eq(index) to select the element at the index


    });
       // and we can use find() to find the element inside another element such as cy.find('div').contains('secret_sauce') it will find the div element that contains the text secret_sauce and then it will find the element inside that div element
       it('find div contains se', () => {
        cy.visit('/')
        cy.get('div').find("div").contains('secret_sauce')
        cy.get('[data-test="username"]').type('secret_sauce')   
        
       });
    
});