const express = require('express');
const router = express.Router();
//pegamos a entidade em si dessa forma usando .Paciente
const Paciente = require('../models').paciente;
//Busca Paciente (GET)
router.get('/', async (req, res) => {
const pacientes = await Paciente.findAll();
res.status(200).json(pacientes);
});

//Cadastra Paciente (POST)
router.post('/', async (req, res) => {
const {fk_endereco, nome, sobrenome, dataNascimento, contato} = req.body;
const newEdit = await Paciente.create({fk_endereco, nome, sobrenome, dataNascimento, contato})
res.status(200).json({message: 'Cadastrado com sucesso'});
});

//Busca Por id o Paciente (GET)
router.get('/:id', async (req, res) => {
const id=req.params;
const paciente = await Paciente.findByPk(req.params.id);
res.status(200).json(paciente);
});

//Deleta Paciente por id (DELETE)
router.delete('/:id', async (req, res) =>{
await Paciente.destroy({
where:{
id: req.params.id,
},
});
res.status(200).json({message:'Excluído com sucesso'})
});

//Altera Paciente por ID (PUT)
router.put('/:id', async (req, res) =>{
    const {fk_endereco, nome, sobrenome, dataNascimento, contato} = req.body;
await Paciente.update(
{ fk_endereco, nome, sobrenome, dataNascimento, contato},
{
where: {id:req.params.id},
}
);
res.status(200).json({message: 'Atualizado com sucesso'});
});
module.exports=router;