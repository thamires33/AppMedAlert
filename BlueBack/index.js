const express = require('express');
const bodyParser = require('body-parser');
//protocolo de comunicacão entre apis e outros serviços cors
//CORS: autoriza para qualquer tipo de serviço (front-end, outras apis,etc)
const cors = require('cors')
const app = express();
const port = 8081;
//importações
const endereco = require('./controllers/enderecoController.js');
const farmacia = require('./controllers/farmaciaController.js');
const item_receita = require('./controllers/item_receitaController.js');
const medicamento = require('./controllers/medicamentoController.js');
const medico = require('./controllers/medicoController.js');
const paciente = require('./controllers/pacienteController.js');
const pedido = require('./controllers/pedidoController.js');
const receita = require('./controllers/receitaController.js');
//Rotas
app.use(bodyParser.json());
//Função CORS para a autorização do uso da API
app.use(cors())
app.get('/', (req, res)=> res.send('BluePill'))
app.use('/endereco', endereco);
app.use('/farmacia', farmacia);
app.use('/item_receita', item_receita);
app.use('/medicamento', medicamento);
app.use('/medico', medico);
app.use('/paciente', paciente);
app.use('/pedido', pedido);
app.use('/receita', receita);
app.listen(port, () => console.log(`Servidor rodando porta ${port}!`))