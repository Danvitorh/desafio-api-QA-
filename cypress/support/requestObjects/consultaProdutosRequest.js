export function consultaProdutosRequest() {
  return {
    method: 'GET',
    url: '/produtos',
    headers: {
      'Content-Type': 'aplication/json'
    }
  };
}
