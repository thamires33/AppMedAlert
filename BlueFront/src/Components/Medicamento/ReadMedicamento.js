import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadMedicamento = () => {
    const { id } = useParams();
    const [medicamento, setMedicamento] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/medicamento/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setMedicamento(res.data);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="quadro">
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes do Medicamento</h1>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Dosagem</th>
                                    <th>Fabricante</th>
                                    <th>Tarja</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{medicamento.id}</td>
                                    <td>{medicamento.nome} </td>
                                    <td>{medicamento.dosagem} </td>
                                    <td>{medicamento.fabricante} </td>
                                    <td>{medicamento.tarja} </td>
                                    <td>{medicamento.createdAt} </td>
                                    <td>{medicamento.updatedAt}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReadMedicamento;