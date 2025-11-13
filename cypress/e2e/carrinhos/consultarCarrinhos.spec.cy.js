import { consultarCarrinhosRequest } from '../../support/requestObjects/carrinhosRequest.js';

describe('Consulta de Carrinhos', () => {

  before(() => {
    cy.login('fulano@qa.com', 'teste');
  });

  it('Deve consultar todos os carrinhos', () => {
    cy.request(consultarCarrinhosRequest()).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('carrinhos');
      expect(response.body.carrinhos).to.be.an('array');
    });
  });

});
