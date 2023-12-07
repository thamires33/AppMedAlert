import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadPedido = () => {
    const { id } = useParams();
    const [pedido, setPedido] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/pedido/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setPedido(res.data);
            })

        axios.get("http://localhost:8081/endereco/")
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setEnderecos(res.data);
            })

        axios.get("http://localhost:8081/paciente/")
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setPacientes(res.data);
            })
            .catch(err => console.log(err))
    }, []);

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
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes do Pedido</h1>
                    <div className="table-responsive"> {/* Adicionado quadro responsivo para limitar a largura da tabela */}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Método de Pagamento</th>
                                    <th>Endereço</th>
                                    <th>Paciente</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{pedido.id}</td>
                                    <td>{pedido.status}</td>
                                    <td>{pedido.total}</td>
                                    <td>{pedido.metodo_pagamento}</td>
                                    <td>{encontrarRuaPeloId(pedido.fk_endereco)}</td> {/*Necessita alteração!!!!!*/}
                                    <td>{encontrarNomePeloId(pedido.fk_paciente)}</td> {/*Necessita alteração!!!!!*/}
                                    <td>{pedido.createdAt} </td>
                                    <td>{pedido.updatedAt} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReadPedido;