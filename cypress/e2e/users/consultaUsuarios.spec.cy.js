import { consultaUsuarioRequest } from '../../support/requestObjects/consultaUsuariosRequest.js';

it('Deve consultar os dados do usuário com sucesso', () => {
  const idUsuario = '1JtTcVoAlLJRZoIF'; 

  cy.request(consultaUsuarioRequest(idUsuario)).then(response => {
    expect(response.status).to.eq(200);
    expect(response.body.nome).to.exist;
    expect(response.body.email).to.exist;
  });
});
