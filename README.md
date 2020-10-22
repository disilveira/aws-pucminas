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