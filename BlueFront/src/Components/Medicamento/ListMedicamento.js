import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListMedicamentos = () => {
    const [medicamentos, setMedicamentos] = useState([]);
    //Listar Medicamentos
    useEffect(() => {
        const fetchAllMedicamentos = async () => {
            try {
                const res = await axios.get("http://localhost:8081/medicamento");
                setMedicamentos(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllMedicamentos();
    }, []);
    console.log(medicamentos);
    //Deletar Medicamentos
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/medicamento/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="quadro">
            <h2 className='w-100 d-flex justify-content-center p-3'>Listando
                Medicamentos</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/addMedicamento" className="btn btn-success">Adicionar um novo Medicamento</Link></p>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Dosagem</th>
                                    <th>Fabricante</th>
                                    <th>Tarja</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {medicamentos.map((medicamento) => {
                                    return (
                                        <tr>
                                            <td>{medicamento.id}</td>
                                            <td>{medicamento.nome} </td>
                                            <td>{medicamento.dosagem} </td>
                                            <td>{medicamento.fabricante} </td>
                                            <td>{medicamento.tarja} </td>
                                            <td>{medicamento.createdAt} </td>
                                            <td>{medicamento.updatedAt}
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/readMedicamento/${medicamento.id}`} className="btn btn-success mx2">Ler</Link>
                                                <Link
                                                    to={`/updateMedicamento/${medicamento.id}`} className="btn btn-info mx2">Editar</Link>
                                                <button
                                                    onClick={() => handleDelete(medicamento.id)} className="btn btn-danger">Deletar</button>
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
export default ListMedicamentos;