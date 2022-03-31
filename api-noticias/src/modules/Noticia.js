const Sequelize = require( 'sequelize');
const db = require("./db")

const Noticia = db.define("noticia", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    materia: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// quando nao existir a tabela esta funcao estara criando uma nova Noticia.sync()
Noticia.sync({alter: true});

module.exports = Noticia;