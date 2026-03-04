/// <reference types="cypress" />
// it is used to get the auto suggestions of cypress commands and also to avoid the errors in cypress test cases
/* 
* we have two ways to write our test cases in cypress
* 1. describe and it //gerken syntax //basic way to write test cases
* 2. (given, when, then ) cucumber syntax //advanced and more organized way to write test cases
*/

/** describe ('name of the test suite' , the function to execute we use arrow function) */

// suite (scenario) such as user story contains multiple test cases and we can have multiple suites in a project

describe('test suite 1', () => {

    /** it ('name of the test case' , the function to execute we use arrow function) */ 
    it('first test case', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('a[href="/login"]').click()
        // we can make this two functions in one line as well
       
    }   )   
});

// dsp its a short cut to describe