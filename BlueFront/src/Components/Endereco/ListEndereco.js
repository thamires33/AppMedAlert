import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListEnderecos = () => {
    const [enderecos, setEnderecos] = useState([]);
    //Listar Enderecos
    useEffect(() => {
        const fetchAllEnderecos = async () => {
            try {
                const res = await axios.get("http://localhost:8081/endereco");
                setEnderecos(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllEnderecos();
    }, []);
    console.log(enderecos);
    //Deletar Enderecos
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/endereco/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="quadro">
            <h2 className='w-100 d-flex justify-content-center p-3'>Listando
                Endereços</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/addEndereco" className="btn btn-success">Adicionar novo Endereço</Link></p>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>CEP</th>
                                    <th>Rua</th>
                                    <th>Numero</th>
                                    <th>Bairro</th>
                                    <th>Cidade</th>
                                    <th>UF</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enderecos.map((endereco) => {
                                    return (
                                        <tr>
                                            <td>{endereco.id}</td>
                                            <td>{endereco.cep}</td>
                                            <td>{endereco.rua} </td>
                                            <td>{endereco.numero} </td>
                                            <td>{endereco.bairro} </td>
                                            <td>{endereco.cidade} </td>
                                            <td>{endereco.uf} </td>
                                            <td>{endereco.createdAt} </td>
                                            <td>{endereco.updatedAt}
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/readEndereco/${endereco.id}`} className="btn btn-success mx2">Ler</Link>
                                                <Link
                                                    to={`/updateEndereco/${endereco.id}`} className="btn btn-info mx2">Editar</Link>
                                                <button
                                                    onClick={() => handleDelete(endereco.id)} className="btn btn-danger">Deletar</button>
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
export default ListEnderecos;