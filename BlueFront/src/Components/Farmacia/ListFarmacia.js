import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListFarmacias = () => {
    const [farmacias, setFarmacias] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    //Listar Farmacias
    useEffect(() => {
        const fetchAllFarmacias = async () => {
            try {
                const res = await axios.get("http://localhost:8081/farmacia");
                setFarmacias(res.data);

                const resEnderecos = await axios.get('http://localhost:8081/endereco');
                setEnderecos(resEnderecos.data);

            } catch (err) {
                console.log(err);
            }
        };
        fetchAllFarmacias();
    }, []);
    console.log(farmacias);
    //Deletar Farmacias
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/farmacia/${id}`);
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
            <h2 className='w-100 d-flex justify-content-center p-3'>Listando
                Farmacias</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/addFarmacia" className="btn btn-success">Adicionar nova Farmacia</Link></p>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Contato</th>
                                    <th>Endereco</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {farmacias.map((farmacia) => {
                                    return (
                                        <tr>
                                            <td>{farmacia.id}</td>
                                            <td>{farmacia.nome} </td>
                                            <td>{farmacia.contato} </td>
                                            <td>{encontrarRuaPeloId(farmacia.fk_endereco)}</td>
                                            <td>{farmacia.createdAt} </td>
                                            <td>{farmacia.updatedAt}
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/readFarmacia/${farmacia.id}`} className="btn btn-success mx2">Ler</Link>
                                                <Link
                                                    to={`/updateFarmacia/${farmacia.id}`} className="btn btn-info mx2">Editar</Link>
                                                <button
                                                    onClick={() => handleDelete(farmacia.id)} className="btn btn-danger">Deletar</button>
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
export default ListFarmacias;