/// <reference types="cypress" />
describe('selector practices lecture', () => {
    it('example test_1', () => {
        cy.visit('/');
        cy.get('h1').contains('Demos')
        // cy.get('.u-s-mb0')
    });
    it('example test_2', () => {
        cy.visit('/');
       // cy.get('a').contains('Reporting & Docs')
       cy.get('[aria-label="Reporting"]')
    });

    it('get web title', () => {

        cy.visit('/');
        cy.get('#web')
       // cy.get('.u-mb0 h3')
    //cy.get('h2').contains('Web')
    });
    it('get the blogs link in the footer', () => {
        cy.visit('/');
        // cy.get('a').contains('Blogs')   
        //cy.get('li.TK-Footer-List-Item').eq(7)
        cy.get('[href="/blogs"]').last()

    });
    it.only('get all of social media icons', () => {
        cy.visit('/');
        //cy.get('a').filter('[class="TK-Footer-Social-Link"]')
       // cy.get('[class="TK-Footer-Social-Link"]').find('li')
       //cy.get('.TK-Footer-List').eq(3)
       cy.get('.TK-Footer-List-Social').children()
       cy.get('.TK--Footer-Desktop .TK-Footer-List-Horizontal-Item').find('.TK-Footer-Social-Link')
    });
});