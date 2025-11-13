export const consultarCarrinhosRequest = () => {
  return {
    method: 'GET',
    url: '/carrinhos',
    headers: {
      Authorization: Cypress.env('token')
    }
  };
};


export const cadastrarCarrinhoRequest = (produtoId, quantidade = 1) => {
  return {
    method: 'POST',
    url: '/carrinhos',
    body: {
      produtos: [
        {
          idProduto: produtoId,
          quantidade: quantidade
        }
      ]
    },
    headers: {
      Authorization: Cypress.env('token'),
      'Content-Type': 'application/json'
    }
  };
};

