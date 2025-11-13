#Automação de Testes de API

Este projeto automatiza testes de API usando Cypress, garantindo que os principais fluxos do sistema funcionem corretamente no dia a dia.

#Instalação
1. Clone o repositório:
git clone https://github.com/Danvitorh/desafio-api-QA-.git


2. Acesse a pasta do projeto:
cd cypress-api-new


3. Instale as dependências:
npm install


#Executando os testes
#Abrir interface interativa do Cypress:
npx cypress open


#Rodar todos os testes no terminal:
npx cypress run


#Rodar testes de um módulo específico, por exemplo `products`:
npx cypress run --spec "cypress/e2e/products/**/*.cy.js"


#Cenários testados
#Carrinho
Não deve permitir cadastrar mais de 1 carrinho
Deve consultar todos os carrinhos

#Login
Deve realizar login com sucesso
Deve falhar ao realizar login com credenciais inválidas

#Produtos
Deve cadastrar um produto com sucesso
Deve retornar erro ao tentar cadastrar produto com nome duplicado
Testes de consulta de produtos

#Usuários
Testes de cadastro de usuário
Deve consultar os dados do usuário com sucesso

Todos os cenários acima foram automatizados para garantir que fluxos repetitivos do dia a dia e críticos da operação, sejam sempre considerados nos testes de regressão smoke.

Por que tais cenários?
São fluxos vitais de serem executados normalmente na aplicação, se eles pararem há um grave risco de prejuízos para corporação.