import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadEndereco = () => {
    const { id } = useParams();
    const [endereco, setEndereco] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/endereco/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setEndereco(res.data);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="quadro">
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes do Livro</h1>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>CEP</th>
                                    <th>Rua</th>
                                    <th>Numero</th>
                                    <th>Bairro</th>
                                    <th>Cidade</th>
                                    <th>UF</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{endereco.cep}</td>
                                    <td>{endereco.rua} </td>
                                    <td>{endereco.numero} </td>
                                    <td>{endereco.bairro} </td>
                                    <td>{endereco.cidade} </td>
                                    <td>{endereco.uf} </td>
                                    <td>{endereco.createdAt} </td>
                                    <td>{endereco.updatedAt} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReadEndereco;