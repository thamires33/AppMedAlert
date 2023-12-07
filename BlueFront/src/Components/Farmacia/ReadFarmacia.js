import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadFarmacia = () => {
    const { id } = useParams();
    const [farmacia, setLivro] = useState([]);
    const [enderecos, setEnderecos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/farmacia/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setLivro(res.data);
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
                    <h1>Detalhes da Farmacia</h1>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Contato</th>
                                    <th>Endereco</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{farmacia.id}</td>
                                    <td>{farmacia.nome} </td>
                                    <td>{farmacia.contato} </td>
                                    <td>{encontrarRuaPeloId(farmacia.fk_endereco)}</td>
                                    <td>{farmacia.createdAt} </td>
                                    <td>{farmacia.updatedAt}
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
export default ReadFarmacia;