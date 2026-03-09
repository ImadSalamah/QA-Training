/// <reference types="cypress" />

// in this file we will learn about the different types of selectors in cypress and how to use them to select the elements on the page and perform actions on them such as click, type, etc.

describe('find the selected elements in the task by using the best selectors', () => {
    
    it('select the logo of the page', () => {
        cy.visit('https://demo.realworld.show/login')
        cy.get('.navbar-brand')
        
    });
    it('select the Home button', () => {
        cy.visit('https://demo.realworld.show/login')
        cy.get('.nav-item').first()
    })

    it('select the Sign UP button', () => {
        cy.visit('https://demo.realworld.show/login')
        cy.get('.nav-item').last()
    })
    it('select the main title of the page', () => {
        cy.visit('https://demo.realworld.show/login')
        cy.get('h1').contains('Sign in')
        
    });
    it('select the create account link', () => {
        cy.visit('https://demo.realworld.show/login')
        cy.get('a').contains('Need an account?')
    });
    it('select the email field', () => {
        cy.visit('https://demo.realworld.show/login')
        cy.get('input[placeholder="Email"]')
    });
    
    it('select the password field', () => {
        cy.visit('https://demo.realworld.show/login')
        cy.get('input[placeholder="Password"]')
    });
    it('select the sign in button', () => {
        cy.visit('https://demo.realworld.show/login')
        cy.get('button').contains('Sign in')
    });



     it('select the footer logo', () => {
        cy.visit('https://demo.realworld.show/login')
        cy.get('.logo-font')
    });
        it('select the footer text', () => {    
        cy.visit('https://demo.realworld.show/login')
        cy.get('.attribution')
    });
});