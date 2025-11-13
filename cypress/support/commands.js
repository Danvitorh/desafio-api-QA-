import { loginRequest } from './requestObjects/loginRequest.js';

Cypress.Commands.add('login', (email, password) => {
  cy.request(loginRequest(email, password)).then(response => {
    expect(response.status).to.eq(200);
    Cypress.env('token', response.body.authorization);
    return response.body.authorization;
  });
});
