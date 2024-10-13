// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//Wait for the element
Cypress.Commands.add('waitForElement', (selector, text = null, timeout = 20000) => {
  if (text) {
    cy.get(selector, { timeout }).should('be.visible').and('contain.text', text);
  } else {
    cy.get(selector, { timeout }).should('be.visible');
  }
});