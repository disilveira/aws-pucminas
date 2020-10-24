# Microsserviços - API's e Web Services

## Equipe
    
- Demian
- Diego
- Francisco
- Jonatan
- Renan

## Sobre o Projeto

Nesse trabalho iremos criar uma arquitetura mínima de microsserviços que tenha os seguintes requisitos:

 - Criação de um microsserviço para gestão de produtos (CRUD). Um produto deve conter os seguintes campos: ID, Nome, Descrição, Categoria e Preço em Reais.
 - Criação de um microsserviço para gestão de vendas com as operações de gerar uma venda, listar uma Venda e cancelar uma venda. Uma venda contém os seguintes dados: ID, valor da venda em reais, a lista e quantidade de cada produtos.
 - A base de dados do microsserviço de produtos deve ser implementada em memória ou banco de dados.
 - A base de dados do microsserviço de vendas deve ser implementada em memória ou banco de dados.
 - O microsserviço de vendas não deve ter acesso direto a base de dados de produtos.
 - Cada microsserviço deve ter um conjunto de testes de componentes realizados com o Postman para provar o funcionamento da API.
 - Disponibilização da API de manipulação de produtos e fornecedores através de um BFF API Gateway com o Ocelot ou outro produto de sua escolha.

A linguagem de implementação de cada microsserviço é de livre escolha.

##API Produtos

Dentro da raíz da api (api-produtos), execute o seguinte comando para criar a imagem docker:

docker build -t springio/spring-boot .

Para subir o container docker, execute o seguinte comando:

docker run -p 8080:8080 -t springio/spring-boot

Rotas:

GET      /produto        lista todos os produtos

GET      /produto/id     busca o produto de um determinado id

POST     /produto        insere um produto

PUT      /produto/id     atualiza um produto de um determinado id

PATCH    /produto/id     atualiza parcialmente um produto de um determinado id

DELETE   /produto/id     deleta um produto de um determinado id

Observação: ao inserir um produto, não é necessário informar o id, ele esta configurado para ser gerado automaticamente como auto-incremento.

Exemplo do corpo de uma requisição de inserção de produto com POST (todos os campos a seguir são obrigatórios):

{

    "nome":"chá",

    "descricao":"chá mineiro",

    "categoria":"alimentos",

    "preco" :5.1

}
