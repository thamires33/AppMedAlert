const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Medicamento
const Medicamento = require('../models').medicamento;
//Busca Medicamento (GET)
router.get('/', async (req, res) => {
    const medicamentos = await Medicamento.findAll();
    res.status(200).json(medicamentos);
});

//Cadastra Medicamento (POST)
router.post('/', async (req, res) => {
    const { nome, dosagem, fabricante, tarja } = req.body;
    const newEdit = await Medicamento.create({ nome, dosagem, fabricante, tarja })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Medicamento (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const medicamento = await Medicamento.findByPk(req.params.id);
    res.status(200).json(medicamento);
});

//Deleta Medicamento por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Medicamento.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});

//Altera Medicamento por ID (PUT)
router.put('/:id', async (req, res) => {
    const { nome, dosagem, fabricante, tarja } = req.body;
    await Medicamento.update(
        { nome, dosagem, fabricante, tarja },
        {
            where: { id: req.params.id },
        }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
});
module.exports = router;