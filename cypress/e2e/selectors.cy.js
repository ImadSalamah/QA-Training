/// <reference types="cypress" />

describe('Selector Tests', () => {
    it('', () => {
        
        cy.visit('/')
    // its not best practice to use cy.get(tag) because if there are multiple tags in the page then it will select the first one and it may not be the one we want to select
    
    // the other way is class selector and we use cy.get('.class') but if there are multiple elements with the same class then it will select the first one and it may not be the one we want to select
    // the best way to select an element is by using id selector because id is unique for each element and we use cy.get('#id')

    //every time search for the best selector and we can use button in sypress to find the selector of this element 

    cy.get('img[alt="Website for automation practice"]')
    });
});