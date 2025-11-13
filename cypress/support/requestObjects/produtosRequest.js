export const produtosRequest = (produto) => {
  return {
    method: 'POST',
    url: '/produtos',
    body: produto,
    headers: {
      'Content-Type': 'application/json',
      Authorization: Cypress.env('token')
    }
  };
};

export const consultaProdutosRequest = () => {
  return {
    method: 'GET',
    url: '/produtos',
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
