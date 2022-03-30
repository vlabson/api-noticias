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

// Noticia.sync()
Noticia.sync({alter: true});

module.exports = Noticia;