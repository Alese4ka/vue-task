// https://docs.cypress.io/api/introduction/api.html

import { text } from "body-parser";
import { type } from "os";

describe('My First Test', () => {
    it('test contents', () => {
      //Open the site
      cy.visit('http://localhost:8080/');
      //Check texts in h1,p
      cy.contains('h1', 'to do list');
      cy.contains('p', 'No tasks');
      //Check addTask function 
      cy.get('input[type=text]').type('text').type('{enter}')
      //Check checkbox
      cy.get('input[type=checkbox]').check({force: true}); 
      cy.get('input[type=text]').type('text1').type('{enter}')
      //Check label include 'text'
      cy.contains('label', 'text');
      //Check length array
      cy.get('input[type=checkbox]').should('have.length', 2)
      //Check tabs
      cy.get('input[type="radio"]').check('1', { force: true }).should('be.checked')
      //Check delete function
      cy.get('button').trigger('click'); 
      //Check length array
      cy.get('input[type=checkbox]').should('have.length', 0) 
    });
  //})
});
