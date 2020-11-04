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
### Processos para subir a aplicação.

Após a realização do clone do repositório, deverá ser realizado algumas configurações para subir as apis de.
  
  1 - Gateway
  2 - Produto
  3 - Vendas
  
Primeiro deverá ser aberto o arquivo api-gateways/.env  e realizar as configuração dos Ips das api_produto e api_vendas
Conforme exemplo abaixo:
   API_PRODUTOS = http://172.17.0.4    API_PRODUTOS_PORT=8080
   API_VENDAS   = http://172.17.0.3    API_VENDAS_PORT  =3002
   
   Observação: as portas já estão fixadas tanto na api_produto como api_vendas, então deverá ser configurado somente os Ips de cada api.
   

Para configurar o docker, você irá precisar ver se o seu computador contém os seguintes pré-requisitos, isso para criar os container:
  - Windows 10 versão pro, enterprise ou education(para conferir isso, basta ir na barra de pesquisa do menu iniciar e procurar por “sistema”).
  - X64.
  - Virtualização habilitada (vá no seu gerenciador de tarefas, clique na aba “desempenho”, por padrão o windows já deixa habilitado).
  - Docker(https://hub.docker.com/editions/community/docker-ce-desktop-windows/)
  
  Após a configuração dos ips, deverá ser executado alguns comandos para configurar o docker, isso para conseguir subir as APIs e também criar os container.
  
    1 Instalar            =>   docker build -t apigateways . 
    2 Listas as imagens   =>   docker images  
    3 Criar um container  =>   docker run -p 3000:3000 -d apigateways
    4 Mostrar container   =>   docker p

Ao configurar o docker e criar os containers poderá ser realizado as consultas das urls de produto e vendas de qualquer programa. Exemplo de programa :(Postman ou qualquer um simular).


Modelos de URls

Get(produto/vendas):  Retorna o produto ou a venda.  
  - http://172.17.0.4/p/produto
                      
{
    "nome":"chá",
    "descricao":"chá mineiro",
    "categoria":"alimentos",
    "preco" :5.1
}      

- http://172.17.0.4/v/vendas
 {
    "venda_id": 1,
    "valor_venda": 19.90,
    "produto_id": 1,
    "quantidade": 2
}.

Pesquisar um produto especifico:
 - http://172.17.0.4/p/produto/1
 - http://172.17.0.4/v/vendas/2

                      
Post(produto/vendas): inseri o produto ou a venda. 
  - http://172.17.0.4/p/produto
                      
{
    "nome":"Sabão",
    "descricao":"bom para o corpo",
    "categoria":"higienico",
    "preco" :100
}      

- http://172.17.0.4/v/vendas
 {
    "venda_id": 2,
    "valor_venda": 100,
    "produto_id": 2,
    "quantidade": 6
}            

DELETE(produto/vendas): 
Para deletar um produto ou uma venda é necessário informar a Url em seguida o id do produto.
- http://172.17.0.4/p/produto/1
{}
- http://172.17.0.4/v/vendas/2
{}

```
