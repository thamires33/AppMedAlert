const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Farmacia
const Farmacia = require('../models').farmacia;
//Busca Farmacia (GET)
router.get('/', async (req, res) => {
    const farmacias = await Farmacia.findAll();
    res.status(200).json(farmacias);
});

//Cadastra Farmacia (POST)
router.post('/', async (req, res) => {
    const { nome, contato, fk_endereco} = req.body;
    const newEdit = await Farmacia.create({ nome, contato, fk_endereco})
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Farmacia (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const farmacia = await Farmacia.findByPk(req.params.id);
    res.status(200).json(farmacia);
});

//Deleta Farmacia por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Farmacia.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});

//Altera Farmacia por ID (PUT)
router.put('/:id', async (req, res) => {
    const { nome, contato, fk_endereco } = req.body;
    await Farmacia.update(
        { nome, contato, fk_endereco },
        {
            where: { id: req.params.id },
        }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
});
module.exports = router;