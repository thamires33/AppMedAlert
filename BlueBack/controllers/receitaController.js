const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Receita
const Receita = require('../models').receita;
//Busca Receita (GET)
router.get('/', async (req, res) => {
    const receitas = await Receita.findAll();
    res.status(200).json(receitas);
});

//Cadastra Receita (POST)
router.post('/', async (req, res) => {
    const { data, diagnostico, observacoes, fk_medico, fk_paciente } = req.body;
    const newEdit = await Receita.create({ data, diagnostico, observacoes, fk_medico, fk_paciente })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Receita (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const receita = await Receita.findByPk(req.params.id);
    res.status(200).json(receita);
});
//Deleta Receita por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Receita.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});
//Altera Receita por ID (PUT)
router.put('/:id', async (req, res) => {
    const { data, diagnostico, observacoes, fk_medico, fk_paciente } = req.body;
    await Receita.update(
        { data, diagnostico, observacoes, fk_medico, fk_paciente },
        {
            where: { id: req.params.id },
        }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
});
module.exports = router;