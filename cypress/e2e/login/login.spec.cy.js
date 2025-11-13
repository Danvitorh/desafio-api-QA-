import { loginRequest } from '../../support/requestObjects/loginRequest.js';

describe('Testes de Login', () => {

  it('Deve realizar login com sucesso', () => {
    
    cy.login('fulano@qa.com', 'teste').then((token) => {
      expect(token).to.be.a('string').and.not.be.empty;
      expect(Cypress.env('token')).to.eq(token);
    });
  });

  it('Deve falhar ao realizar login com credenciais inválidas', () => {
    const email = 'email_invalido@qa.com';
    const password = '123';

    
    cy.request({
      ...loginRequest(email, password),
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property('message', 'Email e/ou senha inválidos');
    });
  });

});
