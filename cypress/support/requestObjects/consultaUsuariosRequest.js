// cypress/support/requestObjects/consultaUsuarioRequest.js
export const consultaUsuarioRequest = (idUsuario) => {
  return {
    method: 'GET',
    url: `/usuarios/${idUsuario}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
