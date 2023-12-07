import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const AddPedido = () => {
    const [pedido, setPedido] = useState({
        status: "",
        total: "",
        metodo_pagamento: "",
        fk_endereco: "",
        fk_paciente: "",
 
    });
 
    //falta coisa nessa linha
    const [enderecos, setEnderecos] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const navigate = useNavigate();
 
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
    }, []);
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
    }, []);
 
    const handleChange = (e) => {
        setPedido((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/pedido", pedido);
            navigate("/pedido");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="quadro">
            <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando Pedido</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Pedido</h3>
                    <form>
                        <div className="mb-3 mt-3">
                            <label className="form-label"> Status:</label>
                            <input type="text" className="form-control" id="status"
                                placeholder="Digite o status" name="status"
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label"> Total:</label>
                            <input type="text" className="form-control" id="total"
                                placeholder="Digite o total" name="total"
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label"> Método de Pagamento:</label>
                            <input type="text" className="form-control" id="metodo_pagamento"
                                placeholder="Digite o metodo de pagamento" name="metodo_pagamento"
                                onChange={handleChange} />
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
                            onClick={handleClick}>Cadastrar</button>
                        <br />
                        <Link to="/pedido">Listar Pedidos</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddPedido;