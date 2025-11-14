/// <reference types="cypress" />
 
describe('Counter App', () => {
 
    // Runs before each test
    beforeEach(() => {
      cy.visit('http://localhost:4200/welcome');   // Update if your app runs on a different port
    });
 
    it('should display initial count as 0', () => {
      cy.get('h3').should('contain', '0');
    });
 
    it('should increment counter on button click', () => {
      cy.contains('Increment').click();  // Clicks the button
      cy.get('h3').should('contain', '1'); // Verify updated count
    });
 
    it('should increment multiple times', () => {
      cy.contains('Increment').click().click().click();
      cy.get('h3').should('contain', '3');
    });
 
  });