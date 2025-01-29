import { cadastroRequest } from '../../support/requestObjects/cadastroRequest';
import { faker } from '@faker-js/faker';

describe('Testes de Cadastro de Usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    const nome = faker.name.firstName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const administrador = "false";

    cy.request(cadastroRequest(nome, email, password, administrador)).then(response => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');

    });
  });
});
