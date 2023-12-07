import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdatePedido() {
  const { id } = useParams();
  const [pedido, setPedido] = useState({
    status: "",
        total: "",
        metodo_pagamento: "",
        fk_endereco: "",
        fk_paciente: "",
  });
 
  const [enderecos, setEnderecos] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setPedido((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };
  useEffect(() => {
 
    const fetchData = async () => {
      try {
        const autoresResponse = await axios.get('http://localhost:8081/endereco');
        setEnderecos(autoresResponse.data);
 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
 
    axios.get("http://localhost:8081/pedido/" + id)
      .then(res => {
        //console.log("Valor do parametro"+id);
        console.log(res);
        setPedido(res.data);
      })
      .catch(err => console.log(err))
  }, []);;
 
  useEffect(() => {
 
    const fetchData = async () => {
      try {
        const autoresResponse = await axios.get('http://localhost:8081/paciente');
        setPacientes(autoresResponse.data);
 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
 
    axios.get("http://localhost:8081/pedido/" + id)
      .then(res => {
        //console.log("Valor do parametro"+id);
        console.log(res);
        setPedido(res.data);
      })
      .catch(err => console.log(err))
  }, []);;
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/pedido/${id}`,
        pedido);
      navigate("/pedido");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="quadro">
      <h1>Formulário para Editar os Pedidos</h1>
      <form>
        <div className="mb-3 mt-3">
          <label className="form-label"> ID:</label>
          <input type="text" className="form-control" id="id"
            placeholder="ID"
            name="id" value={pedido.id} disabled
            onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
              <label className="form-label">Status:</label>
              <input
                type="text"
                className="form-control"
                id="status"
                placeholder="Digite o Status"
                name="status" value={pedido.status}
                onChange={handleChange}
              />
            </div>
 
            <div className="mb-3 mt-3">
              <label className="form-label">total:</label>
              <input
                type="text"
                className="form-control"
                id="total"
                placeholder="Informe o total"
                name="total" value={pedido.total}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Método de Pagamento:</label>
              <input
                type="text"
                className="form-control"
                id="metodo_pagamento"
                placeholder="Informe a forma de pagamento"
                name="metodo_pagamento" value={pedido.metodo_pagamento}
                onChange={handleChange}
              />
            </div>
 
            <div className="mb-3">
              <label className="form-label">Endereco:</label>
              <select
                className="form-select"
                id="fk_endereco"
                name="fk_endereco"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Selecione o Endereco
                </option>
                {enderecos.map((endereco) => (
                  <option key={endereco.id} value={endereco.id}>
                    {endereco.rua}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Paciente:</label>
              <select
                className="form-select"
                id="fk_paciente"
                name="fk_paciente"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Selecione o Paciente
                </option>
                {pacientes.map((paciente) => (
                  <option key={paciente.id} value={paciente.id}>
                    {paciente.nome}
                  </option>
                ))}
              </select>
            </div>
        <button type="submit" className="btn btn-primary"
          onClick={handleClick}>Alterar</button>
      </form>
      <div className='quadro d-flex justify-content-center'>
        <Link to="/pedido">Veja todos os Pedidos</Link>
      </div>
    </div>
  )
}
export default UpdatePedido;