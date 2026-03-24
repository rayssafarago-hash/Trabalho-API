const express = require('express');
const fs = require ('fs');

const app = express();
const PORT = 3000;

app.use (express.json());

app.use('/produtos', rotasProdutos);

app.use('/', (rreq, res)=>{
    res.json({
        mensagem: 'API de estoque Rodando',
        endpoints: {
            listarTodos: 'GET /produtos',
            buscarPorId: 'GET /produtos/:id',
            cadastrar: 'POST /produtos',
            atualizar: 'PUT /produtos/:id',
            remover: 'DELETE /produto/:id'

        }
    });
});


app.listen(PORT, () => {
    console.log
    (`Servidor rodando em http://localhost:${PORT}`)
});