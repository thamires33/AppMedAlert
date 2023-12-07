const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Endereco
const Endereco = require('../models').endereco;
//Busca Endereco (GET)
router.get('/', async (req, res) => {
    const enderecos = await Endereco.findAll();
    res.status(200).json(enderecos);
});

//Cadastra Endereco (POST)
router.post('/', async (req, res) => {
    const { cep, rua, numero, bairro, cidade, uf } = req.body;
    const newEdit = await Endereco.create({ cep, rua, numero, bairro, cidade, uf })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Endereco (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const endereco = await Endereco.findByPk(req.params.id);
    res.status(200).json(endereco);
});
//Deleta Endereco por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Endereco.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});

//Altera Endereco por ID (PUT)
router.put('/:id', async (req, res) => {
    const {  cep, rua, numero, bairro, cidade, uf  } = req.body;
    await Endereco.update(
        {  cep, rua, numero, bairro, cidade, uf  },
        {
            where: { id: req.params.id },
        }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
});
module.exports = router;