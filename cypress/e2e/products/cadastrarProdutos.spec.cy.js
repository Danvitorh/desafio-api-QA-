import { produtosRequest } from '../../support/requestObjects/produtosRequest.js';

describe('Testes de Cadastro de Produtos', () => {
  before(() => {
    cy.login('fulano@qa.com', 'teste'); 
  });

  it('Deve cadastrar um produto com sucesso', () => {
    const produto = {
      nome: 'Camiseta time',
      preco: 3500,
      descricao: 'Camiseta',
      quantidade: 15
    };

    const token = Cypress.env('token');

    cy.request({
      ...produtosRequest(produto),
      headers: {
        Authorization: token
      }
    }).then(response => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      expect(response.body).to.have.property('_id');
    });
  });

  it('Deve retornar erro ao tentar cadastrar produto com nome duplicado', () => {
    const produtoDuplicado = {
      nome: 'Camiseta time', 
      preco: 3500,
      descricao: 'Produto duplicado',
      quantidade: 5
    };

    const token = Cypress.env('token');

    cy.request({
      ...produtosRequest(produtoDuplicado),
      headers: {
        Authorization: token
      },
      failOnStatusCode: false
    }).then(response => {
      // o Serverest retorna 400 e mensagem específica:
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('Já existe produto com esse nome');
    });
  });
});
