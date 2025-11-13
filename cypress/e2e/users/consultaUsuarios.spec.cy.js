import { consultaUsuarioRequest } from '../../support/requestObjects/usuariosRequest.js';

it('Deve consultar os dados do usuário com sucesso', () => {
  const idUsuario = '0uxuPY0cbmQhpEz1'; 

  cy.request(consultaUsuarioRequest(idUsuario)).then(response => {
    expect(response.status).to.eq(200);
    expect(response.body.nome).to.exist;
    expect(response.body.email).to.exist;
  });
});
