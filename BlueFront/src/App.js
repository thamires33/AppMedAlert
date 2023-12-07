import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddMedico from './Components/Medico/AddMedico';
import ListMedicos from './Components/Medico/ListMedico';
import UpdateMedico from './Components/Medico/UpdateMedico';
import ReadMedico from './Components/Medico/ReadMedico';

import AddEndereco from './Components/Endereco/AddEndereco';
import UpdateEndereco from './Components/Endereco/UpdateEndereco';
import ListEnderecos from './Components/Endereco/ListEndereco';
import ReadEndereco from './Components/Endereco/ReadEndereco';

import UpdateFarmacia from './Components/Farmacia/UpdateFarmacia';
import ReadFarmacia from './Components/Farmacia/ReadFarmacia';
import AddFarmacia from './Components/Farmacia/AddFarmacia';
import ListFarmacias from './Components/Farmacia/ListFarmacia';

import AddMedicamento from './Components/Medicamento/AddMedicamento';
import ListMedicamentos from './Components/Medicamento/ListMedicamento';
import ReadMedicamento from './Components/Medicamento/ReadMedicamento';
import UpdateMedicamento from './Components/Medicamento/UpdateMedicamento';

import AddPaciente from './Components/Paciente/AddPaciente';
import ListPacientes from './Components/Paciente/ListPaciente';
import ReadPaciente from './Components/Paciente/ReadPaciente';
import UpdatePaciente from './Components/Paciente/UpdatePaciente';

import AddPedido from './Components/Pedido/AddPedido';
import ListPedidos from './Components/Pedido/ListPedido';
import ReadPedido from './Components/Pedido/ReadPedido';
import UpdatePedido from './Components/Pedido/UpdatePedido';

import AddReceita from './Components/Receita/AddReceita';
import ListReceitas from './Components/Receita/ListReceita';
import ReadReceita from './Components/Receita/ReadReceita';
import UpdateReceita from './Components/Receita/UpdateReceita';

import AddItem_receita from './Components/Item_receita/AddItem_receita';
import ListItem_receita from './Components/Item_receita/ListItem_receita';
import ReadItem_receita from './Components/Item_receita/ReadItem_receita';
import UpdateItem_receita from './Components/Item_receita/UpdateItem_receita';

import Home from './Components/Home/Home';


function App() {
return (
<div className="App">
<header className="App-header">
<BrowserRouter>
<Routes>

<Route exact path='/' element={<Home/>} />

<Route path="/medico" element={<ListMedicos/>} />
<Route path="/addMedico" element={<AddMedico/>} />
<Route path="/readMedico/:id" element={<ReadMedico/>} />
<Route path="/updateMedico/:id" element={<UpdateMedico/>} />

<Route path="/endereco" element={<ListEnderecos/>} />
<Route path="/addEndereco" element={<AddEndereco/>} />
<Route path="/readEndereco/:id" element={<ReadEndereco/>} />
<Route path="/updateEndereco/:id" element={<UpdateEndereco/>} />

<Route path="/farmacia" element={<ListFarmacias/>} />
<Route path="/addFarmacia" element={<AddFarmacia/>} />
<Route path="/readFarmacia/:id" element={<ReadFarmacia/>} />
<Route path="/updateFarmacia/:id" element={<UpdateFarmacia/>} />

<Route path="/addMedicamento" element={<AddMedicamento/>} />
<Route path="/medicamento" element={<ListMedicamentos/>} />
<Route path="/readMedicamento/:id" element={<ReadMedicamento/>} />
<Route path="/updateMedicamento/:id" element={<UpdateMedicamento/>} />

<Route path="/addPaciente" element={<AddPaciente/>} />
<Route path="/paciente" element={<ListPacientes/>} />
<Route path="/readPaciente/:id" element={<ReadPaciente/>} />
<Route path="/updatePaciente/:id" element={<UpdatePaciente/>} />

<Route path="/addPedido" element={<AddPedido/>} />
<Route path="/pedido" element={<ListPedidos/>} />
<Route path="/readPedido/:id" element={<ReadPedido/>} />
<Route path="/updatePedido/:id" element={<UpdatePedido/>} />

<Route path="/addReceita" element={<AddReceita/>} />
<Route path="/receita" element={<ListReceitas/>} />
<Route path="/readReceita/:id" element={<ReadReceita/>} />
<Route path="/updateReceita/:id" element={<UpdateReceita/>} />

<Route path="/addItem_receita" element={<AddItem_receita/>} />
<Route path="/item_receita" element={<ListItem_receita/>} />
<Route path="/readItem_receita/:id" element={<ReadItem_receita/>} />
<Route path="/updateItem_receita/:id" element={<UpdateItem_receita/>} />

</Routes>
</BrowserRouter>
</header>
</div>
);
}
export default App;