// cypress/integration/products/consultaProdutos.spec.cy.js
import { consultaProdutosRequest } from '../../support/requestObjects/consultaProdutosRequest';

describe('Testes de Consulta de Produtos', () => {
  it('Deve listar produtos com sucesso', () => {
    cy.request(consultaProdutosRequest()).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.produtos.length).to.be.greaterThan(0);
    });
  });
});
