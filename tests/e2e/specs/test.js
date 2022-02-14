// https://docs.cypress.io/api/introduction/api.html

import { text } from "body-parser";
import { type } from "os";

describe('My First Test', () => {
  //beforeEach(() => {
    it('test contents', () => {
      cy.visit('http://localhost:8080/');

      cy.contains('h1', 'to do list');
      cy.contains('p', 'No tasks');
      
      cy.get('input[type=text]').type('text').type('{enter}')
      cy.get('input[type=checkbox]').check({force: true}); 
      cy.get('input[type=text]').type('text1').type('{enter}')
      
      cy.get('input[type="radio"]').check('1', { force: true }).should('be.checked')

      cy.get('button').trigger('click');  
    });
  //})
});
