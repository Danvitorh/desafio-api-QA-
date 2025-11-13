export const cadastroUsuarioRequest = (nome, email, password, administrador) => {
  return {
    method: 'POST',
    url: '/usuarios',
    body: {
      nome,
      email,
      password,
      administrador
    },
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
  
export const consultaUsuarioRequest = (idUsuario) => {
  return {
    method: 'GET',
    url: `/usuarios/${idUsuario}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
