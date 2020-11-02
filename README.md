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

## API Produtos

Dentro da raíz da api (api-produtos), execute o seguinte comando para criar a imagem docker (é necessário ter o docker instalado na máquina):

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

Observação: Precisei instalar o Java JDK 8 na minha máquina pra criar a api, não sei se é necessário ter ela instalada se for apenas para roda-lá, favor verificar, caso necessário, basta baixar o JDK 8 no link https://www.oracle.com/br/java/technologies/javase/javase-jdk8-downloads.html e instalá-lo na máquina local.

## API de Vendas

### Docker

Imagem: [https://hub.docker.com/repository/docker/diegoalmeidalab/api-vendas-v2](https://hub.docker.com/repository/docker/diegoalmeidalab/api-vendas-v2)

Build da Imagem
```
docker build -t <your username>/api-vendas-v2 .
```

Executar a imagem
```
docker run -p 3003:3003 -d <your username>/api-vendas-v2
```

Acesso em: http://localhost:3003/vendas


### Recursos da API

Lista todas as vendas
```
GET /vendas
```

Lista uma venda pelo seu id
```
GET /vendas/id
```

Insere uma venda
```
POST /vendas
```

Corpo da requisição POST
```
{
    "valor_venda": 19.90,
    "produto_id": 1,
    "quantidade": 2
}
```

Atualiza uma venda pelo id passado no corpo da requisição
```
PATCH /vendas
```     

Corpo da requisição PATCH
```
{
    "venda_id": 1,
    "valor_venda": 19.90,
    "produto_id": 1,
    "quantidade": 2
}
```

Exclui uma venda pelo id da venda informada
```
DELETE /vendas/id      
```