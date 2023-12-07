import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListPacientes = () => {
    const [pacientes, setPacientes] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    //Listar Pacientes
    useEffect(() => {
        const fetchAllPacientes = async () => {
            try {
                const res = await axios.get("http://localhost:8081/paciente");
                setPacientes(res.data);

                const resEnderecos = await axios.get('http://localhost:8081/endereco');
                setEnderecos(resEnderecos.data);

            } catch (err) {
                console.log(err);
            }
        };

        fetchAllPacientes();
    }, []);
    console.log(pacientes);
    //Deletar Pacientes
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/paciente/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };

    const encontrarRuaPeloId = (id) => {
        const enderecoEncontrado = enderecos.find((endereco) => endereco.id === id);
        return enderecoEncontrado ? enderecoEncontrado.rua : 'Endereço não encontrado';
    };

    return (
        <div className="quadro">
            <h2 className='w-100 d-flex justify-content-center p-3'>Listando Pacientes</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/addPaciente" className="btn btn-success">Adicionar novo Paciente</Link></p>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Sobrenome</th>
                                    <th>Data.Nasc</th>
                                    <th>Contato</th>
                                    <th>Endereco</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pacientes.map((paciente) => {
                                    return (
                                        <tr>
                                            <td>{paciente.id}</td>
                                            <td>{paciente.nome} </td>
                                            <td>{paciente.sobrenome} </td>
                                            <td>{paciente.dataNascimento} </td>
                                            <td>{paciente.contato} </td>
                                            <td>{encontrarRuaPeloId(paciente.fk_endereco)}</td>
                                            <td>{paciente.createdAt} </td>
                                            <td>{paciente.updatedAt}
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/readPaciente/${paciente.id}`} className="btn btn-success mx2">Ler</Link>
                                                <Link
                                                    to={`/updatePaciente/${paciente.id}`} className="btn btn-info mx2">Editar</Link>
                                                <button
                                                    onClick={() => handleDelete(paciente.id)} className="btn btn-danger">Deletar</button>
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

export default ListPacientes;