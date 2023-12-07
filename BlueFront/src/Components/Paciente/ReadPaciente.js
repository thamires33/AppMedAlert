import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadPaciente = () => {
    const { id } = useParams();
    const [paciente, setPaciente] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/paciente/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setPaciente(res.data);
            })

        axios.get("http://localhost:8081/endereco/")
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setEnderecos(res.data);
            })

            .catch(err => console.log(err))
    }, []);

    const encontrarRuaPeloId = (id) => {
        const enderecoEncontrado = enderecos.find((endereco) => endereco.id === id);
        return enderecoEncontrado ? enderecoEncontrado.rua : 'Endereço não encontrado';
    };


    return (
        <div className="quadro">
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes do Paciente</h1>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Sobrenome</th>
                                    <th>dataNascimento</th>
                                    <th>Contato</th>
                                    <th>Endereço</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{paciente.id}</td>
                                    <td>{paciente.nome} </td>
                                    <td>{paciente.sobrenome} </td>
                                    <td>{paciente.dataNascimento} </td>
                                    <td>{paciente.contato} </td>
                                    <td>{encontrarRuaPeloId(paciente.fk_endereco)}</td>
                                    <td>{paciente.createdAt} </td>
                                    <td>{paciente.updatedAt} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReadPaciente;