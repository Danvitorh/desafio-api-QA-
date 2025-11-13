export const consultarCarrinhosRequest = () => {
  return {
    method: 'GET',
    url: '/carrinhos',
    headers: {
      Authorization: Cypress.env('token')
    }
  };
};

// Cadastrar carrinho
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

// Deletar carrinho (opcional, se quiser manter)
export const deletarCarrinhoRequest = (id) => {
  return {
    method: 'DELETE',
    url: `/carrinhos/${id}`,
    headers: {
      Authorization: Cypress.env('token')
    }
  };
};
