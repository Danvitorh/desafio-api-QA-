// cypress/support/requestObjects/cadastroRequest.js
export const cadastroRequest = (nome, email, password, administrador) => {
    return {
      method: 'POST',
      url: '/usuarios',
      body: {
        nome: nome,
        email: email,
        password: password,
        administrador: administrador
      },
      headers: {
        'Content-Type': 'application/json'
      }
    };
  };