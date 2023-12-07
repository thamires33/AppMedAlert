const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Item_Receita
const Item_Receita = require('../models').item_receita;
//Busca Item_Receita (GET)
router.get('/', async (req, res) => {
    const item_receitas = await Item_Receita.findAll();
    res.status(200).json(item_receitas);
});

//Cadastra Item_Receita (POST)
router.post('/', async (req, res) => {
    const { instrucoes, quantidade, fk_receita, fk_medicamento } = req.body;
    const newEdit = await Item_Receita.create({ instrucoes, quantidade, fk_receita, fk_medicamento })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Item_Receita (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const item_receita = await Item_Receita.findByPk(req.params.id);
    res.status(200).json(item_receita);
});
//Deleta Item_Receita por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Item_Receita.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});

//Altera Item_Receita por ID (PUT)
router.put('/:id', async (req, res) => {
    const { instrucoes, quantidade, fk_receita, fk_medicamento } = req.body;
    await Item_Receita.update(
        { instrucoes, quantidade, fk_receita, fk_medicamento },
        {
            where: { id: req.params.id },
        }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
});
module.exports = router;