import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadMedico = () => {
    const { id } = useParams();
    const [medico, setMedico] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/medico/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setMedico(res.data);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="quadro">
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes do Medico</h1>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Sobrenome</th>
                                    <th>Especialidade</th>
                                    <th>CRM</th>
                                    <th>contato</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{medico.id}</td>
                                    <td>{medico.nome} </td>
                                    <td>{medico.sobrenome} </td>
                                    <td>{medico.especialidade} </td>
                                    <td>{medico.CRM} </td>
                                    <td>{medico.contato} </td>
                                    <td>{medico.createdAt} </td>
                                    <td>{medico.updatedAt} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReadMedico;