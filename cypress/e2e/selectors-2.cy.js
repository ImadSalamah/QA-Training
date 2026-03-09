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
    it('select element by position in the list', () => {
        cy.visit('/')
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('.inventory_item').eq(0).contains('Sauce Labs Backpack')
        cy.get('.inventory_item').eq(0).next().find('.inventory_item_price').contains('$9.99')
        cy.get('.inventory_item').eq(3).prev().find('.inventory_item_price').contains('$15.99')
        cy.get('.inventory_item').eq(1).contains('Sauce Labs Bike Light')
        cy.get('.inventory_item').eq(2).contains('Sauce Labs Bolt T-Shirt')
    });

    // now we will learn how to select element by filtering the elements by using filter() method 
    // such as cy.get('div').filter('.inventory_item') 
    // it will select all the div elements and then 
    // it will filter the elements that have the class inventory_item and it will return 
    // only those elements that have the class inventory_item
    it.only('select element by filtering the elements', () => {
        cy.visit('/')
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('div').filter('.inventory_item').eq(0).contains('Sauce Labs Backpack')
        cy.get('div').filter('.inventory_item').eq(0).next().find('.inventory_item_price').contains('$9.99')
        cy.get('div').filter('.inventory_item').eq(3).prev().find('.inventory_item_price').contains('$15.99')
        cy.get('div').filter('.inventory_item').eq(1).contains('Sauce Labs Bike Light')
        cy.get('div').filter('.inventory_item').eq(2).contains('Sauce Labs Bolt T-Shirt')
    });
    // if i want to run only one test case then i can use it.only and if i want to run only one test suite then i can use describe.only
});
// get method is used to search for the element in the entire DOM and it will return 
// all the elements that match the selector and we can use find() 
// to find the element inside another element and
//  we can't use find() method without using get() method first 
// because find() method is used to find the element inside another element and it will
//  return only those elements that are inside the element that we have selected with get() method

// parent() method is used to find the parent element of the selected element and it will return 
// the parent element of the selected element and we can use parent() method to
//  find the parent element of the selected element 

// children() method is used to find the child elements of the selected element and it will return
//  all the child elements of the selected element and we can use children() method to
//   find the child elements of the selected element