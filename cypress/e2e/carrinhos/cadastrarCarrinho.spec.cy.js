import { cadastrarCarrinhoRequest } from '../../support/requestObjects/carrinhosRequest.js';

describe('Validação de Carrinho Existente', () => {

  let idProdutoExistente;

  before(() => {
   
    cy.login('fulano@qa.com', 'teste');

    cy.request({
      method: 'GET',
      url: '/produtos',
      headers: { Authorization: Cypress.env('token') }
    }).then((response) => {
      expect(response.status).to.eq(200);
      const produtos = response.body.produtos;
      expect(produtos.length).to.be.greaterThan(0);
      idProdutoExistente = produtos[0]._id;
    });
  });

  it('Não deve permitir cadastrar mais de 1 carrinho', () => {
    cy.request({
      ...cadastrarCarrinhoRequest(idProdutoExistente, 2),
      failOnStatusCode: false // Permite capturar o erro sem quebrar o teste
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('message', 'Não é permitido ter mais de 1 carrinho');
    });
  });

});
