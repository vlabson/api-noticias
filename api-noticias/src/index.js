const express = require('express');
const app = express();
const Noticia = require("./modules/Noticia")

app.use(express.json());

app.get("/noticias", async (request, response) =>{
    console.log("Tratar a busca das noticias.");

    const noticias = await Noticia.findAll();

    return response.json({
        erro: false,
        data: {
            noticias
        }
    });
})

app.post("/noticias", async (request, response) => {
    console.log("Tratar criação de noticia")
    const noticia = request.body;

    if(noticia.titulo == null){
        return response.status(400).json({
            erro: true,
            message: "O titulo Não pode ser nulo.",
            data: {}
        })
    }

    if(noticia.materia == null){
        return response.status(400).json({
            erro: true,
            message: "A materia Não pode ser nulo.",
            data:{ }
        })
    }

    await Noticia.create(noticia)
        .then(data  => {
            return response.status(201).json({
                erro: false,
                message: "Noticia cadastrada com sucesso.",
                data
            })
        }).catch(() => {
            return response.status(400).json({
                erro: true,
                message: "Erro: Noticia não cadastrada."
            })
        })
})

app.put("/noticias/:id", async (request, response) => {
    console.log("Tratar atualização de noticia")
    const noticia = request.body;
    const id = request.params.id;

    if(noticia.titulo == null){
        return response.status(400).json({
            erro: true,
            message: "O titulo Não pode ser nulo.",
            data: {}
        })
    }

    if(noticia.materia == null){
        return response.status(400).json({
            erro: true,
            message: "A materia Não pode ser nulo.",
            data:{ }
        })
    }

    await Noticia.update(noticia,{
        where: {
            id: id
        }
    })
        .then(data => {
            return response.status(201).json({
                erro: false,
                message: "Noticia atualizada com sucesso.",
                data
            })
        }).catch(() => {
            return response.status(400).json({
                erro: true,
                message: "Erro: Noticia não atualizada."
            })
        })
})

app.delete("/noticias/:id", async (request, response) => {
    console.log("Tratar remoção de noticia")
    const id = request.params.id;

    await Noticia.destroy({where: {
        id: id
    }})
})

app.listen(3333, () => {
    console.log("Servidor iniciado na porta 3333: http://localhost:3333")
});