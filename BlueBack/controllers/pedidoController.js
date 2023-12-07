const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Pedido
const Pedido = require('../models').pedido;
//Busca Pedido (GET)
router.get('/', async (req, res) => {
    const pedidos = await Pedido.findAll();
    res.status(200).json(pedidos);
});

//Cadastra Pedido (POST)
router.post('/', async (req, res) => {
    const { status, total, metodo_pagamento, fk_endereco, fk_paciente } = req.body;
    const newEdit = await Pedido.create({ status, total, metodo_pagamento, fk_endereco, fk_paciente })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Pedido (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const pedido = await Pedido.findByPk(req.params.id);
    res.status(200).json(pedido);
});
//Deleta Pedido por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Pedido.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});
//Altera Pedido por ID (PUT)
router.put('/:id', async (req, res) => {
    const { status, total, metodo_pagamento, fk_endereco, fk_paciente } = req.body;
    await Pedido.update(
        { status, total, metodo_pagamento, fk_endereco, fk_paciente },
        {
            where: { id: req.params.id },
        }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
});
module.exports = router;