import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListPedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    const [pacientes, setPacientes] = useState([]);

    //Listar Pedidos
    useEffect(() => {
        const fetchAllPedidos = async () => {
            try {
                const res = await axios.get("http://localhost:8081/pedido");
                setPedidos(res.data);

                const resEnderecos = await axios.get('http://localhost:8081/endereco');
                setEnderecos(resEnderecos.data);

                const resPacientes = await axios.get('http://localhost:8081/paciente');
                setPacientes(resPacientes.data);

            } catch (err) {
                console.log(err);
            }
        };
        fetchAllPedidos();
    }, []);
    console.log(pedidos);
    //Deletar Pedidos
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/pedido/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };

    const encontrarRuaPeloId = (id) => {
        const enderecoEncontrado = enderecos.find((endereco) => endereco.id === id);
        return enderecoEncontrado ? enderecoEncontrado.rua : 'Endereço não encontrado';
    };

    const encontrarNomePeloId = (id) => {
        const pacienteEncontrado = pacientes.find((paciente) => paciente.id === id);
        return pacienteEncontrado ? pacienteEncontrado.nome : 'Paciente não encontrado';
    };

    return (
        <div className="quadro">
            <h2 className='w-100 d-flex justify-content-center p-3'>Listando Pedidos</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/addPedido" className="btn btn-success">Adicionar novo Pedido</Link></p>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Metodo de Pagamento</th>
                                    <th>Endereço</th>
                                    <th>Paciente</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pedidos.map((pedido) => {
                                    return (
                                        <tr>
                                            <td>{pedido.id}</td>
                                            <td>{pedido.status}</td>
                                            <td>{pedido.total}</td>
                                            <td>{pedido.metodo_pagamento}</td>
                                            <td>{encontrarRuaPeloId(pedido.fk_endereco)}</td> {/*Necessita alteração!!!!!*/}
                                            <td>{encontrarNomePeloId(pedido.fk_paciente)}</td> {/*Necessita alteração!!!!!*/}
                                            <td>{pedido.createdAt} </td>
                                            <td>{pedido.updatedAt}
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/readPedido/${pedido.id}`} className="btn btn-success mx2">Ler</Link>
                                                <Link
                                                    to={`/updatePedido/${pedido.id}`} className="btn btn-info mx2">Editar</Link>
                                                <button
                                                    onClick={() => handleDelete(pedido.id)} className="btn btn-danger">Deletar</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListPedidos;