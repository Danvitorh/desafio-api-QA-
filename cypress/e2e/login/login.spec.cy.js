// cypress/integration/api/login.spec.js
import { loginRequest } from '../../support/requestObjects/loginRequest.js';

describe('Testes de Login', () => {
  it('Deve realizar login com sucesso', () => {
    const email = 'admin@mail.com';
    const password = 'qwe123';

    cy.request(loginRequest(email, password)).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq('Login realizado com sucesso');
      });
      
    });
  });
