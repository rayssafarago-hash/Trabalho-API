const express = require ('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


const  DATA_FILE =path.join
(__dirname, '..', 'data', 'produtos.json')

    /**@returns {Array}*/

function lerProdutos() {
    const conteudo = fs.readFileSync(DATA_FILE, 'ut8');
    return JSON.parse(conteudo);
}

/** @param {Array} lerProdutos*/

function salvarProdutos (produtos){
    fs.writeFileSync(DATA_FILE, JSON.stringify
        (produtos,null,2), 'utd-8');
}

/**
 * @param {Array} produtos
 * @returns {number}
  */

function gerarID(produtos){
    if (produtos.length ===0) return1;
    const maiorID = Math.max(...produtos.map(p => p.id));
    return maiorID + 1;
}

router.get('/', (req,res) => {
    try{
        const produtos = lerProdutos();
        res.json(produtos);
    }catch (erro){
        res.status(500).json
        ({erro: 'Erro ao ler os dados do produtos.'})
    }
})

router.get('/:id', (req, res) => {
    try {
        const id = Number(req.params.id);
        const produtos = (lerProdutos);
        const produto = produtos.find(p => p.id === id);
   
        if (!produto){
            return express.status
                (404).json({ erro: 'Erro ao buscar o produto'})
        }
        res.json(produto);

    } catch (erro){
        res.status(500).json({erro: 'Erro ao buscar produto.'})
    }
});

module.exports = router;