##  Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker]...
- [RedisAlpine] $docker run --name redis -p 6379:6379 -d -t redis:alpine

##  Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `background-tasks`;
3. Rode `yarn install` para instalar as dependências;
4. Copie o arquivo `.env.example` e crie um arquivo `.env` com as credenciais de email e do Redis;
5. Instale o Docker e rode $ sudo docker start redis;
8. Rode `yarn start` para iniciar os servidores.
