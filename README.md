# api-noticias
Api desenvolvida em Node.js, Express, MySQL e Se .

RODAR O PROJETO 
intalar dependencias contidas no package.json
npm install

rodar o projeto com nodemon
npm run dev


ACESSAR PROJETO
base url : http://localhost:3333

LISTAR NOTICIAS (fazer uma requisição)

GET http://localhost:3333/noticias

CONTRUÇÃO DE BANCO E TABELA

DB : "basenoticias"
USERNAME: "root"
PASSWORD: ""
DIALECT: "mysql"

TABELA: "noticia"
    id: {
        type:INTEGER
        autoIncrement: true
        primaryKey: true
        }
    titulo: {
        type: STRING
        allowNull: false
        }
    materia: {
        type: STRING
        allowNull: false
       }


CADASTRAR NOTICIAS

POST http://localhost:3333/noticias

Deve ser enviado como parametro

body    
   {
    "titulo":"titulo da noticia",
    "materia":"conteudo da noticia"
    }
  
 ALTERAR NOTICIAS
 
PUT http://localhost:3333/noticias/id

body    
   {
    "titulo":"titulo da noticia a ser alterada ",
    "materia":"conteudo da noticia a ser alterada"
    }

DELETAR NOTICIAS 

DELETE http://localhost:3333/noticias/id

