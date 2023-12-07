const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Medico
const Medico = require('../models').medico;
//Busca Medico (GET)
router.get('/', async (req, res) => {
const medicos = await Medico.findAll();
res.status(200).json(medicos);
});

//Cadastra Medico (POST)
router.post('/', async (req, res) => {
const { nome, sobrenome, especialidade, CRM, contato } = req.body;
const newEdit = await Medico.create({ nome, sobrenome, especialidade, CRM, contato })
res.status(200).json({message: 'Cadastrado com sucesso'});
});

//Busca Por id o Medico (GET)
router.get('/:id', async (req, res) => {
const id=req.params;
const medico = await Medico.findByPk(req.params.id);
res.status(200).json(medico);
});

//Deleta Medico por id (DELETE)
router.delete('/:id', async (req, res) =>{
await Medico.destroy({
where:{
id: req.params.id,
},
});
res.status(200).json({message:'Excluído com sucesso'})
});

//Altera Medico por ID (PUT)
router.put('/:id', async (req, res) =>{
const {nome, sobrenome, especialidade, CRM, contato} = req.body;
await Medico.update(
{nome, sobrenome, especialidade, CRM, contato},
{
where: {id:req.params.id},
}
);
res.status(200).json({message: 'Atualizado com sucesso'});
});
module.exports=router;