# api-noticias
Api desenvolvida em Node.js, Express, MySQL e Sequelize.

RODAR O PROJETO 
intalar dependencias contidas no package.json
npm install

instalar a dependencia nodemon contida no script DEV no package.json 
npm run dev

ACESSAR PROJETO
base url : http://localhost:3333

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

LISTAR NOTICIAS (fazer uma requisição)

GET http://localhost:3333/noticias

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

