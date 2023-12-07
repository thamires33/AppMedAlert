import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadItem_receita = () => {
    const { id } = useParams();
    const [item_receita, setItem_receita] = useState([]);
    const [receitas, setReceitas] = useState([]);
    const [medicamentos, setMedicamentos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/item_receita/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setItem_receita(res.data);
            })

        axios.get("http://localhost:8081/medicamento/")
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setMedicamentos(res.data);
            })

        axios.get("http://localhost:8081/receita/")
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setReceitas(res.data);
            })

            .catch(err => console.log(err))
    }, []);

    const encontrarNomePeloId = (id) => {
        const medicamentoEncontrado = medicamentos.find((medicamento) => medicamento.id === id);
        return medicamentoEncontrado ? medicamentoEncontrado.nome : 'Medicamento não encontrado';
    };

    const encontrarReceitaPeloId = (id) => {
        const receitaEncontrado = receitas.find((receita) => receita.id === id);
        return receitaEncontrado ? receitaEncontrado.diagnostico : 'Receita não encontrada';
    };

    return (
        <div className="quadro">
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes do Item</h1>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Instruções</th>
                                    <th>Quantidade</th>
                                    <th>Receita</th>
                                    <th>Medicamento</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{item_receita.id}</td>
                                    <td>{item_receita.instrucoes} </td>
                                    <td>{item_receita.quantidade} </td>
                                    <td>{encontrarReceitaPeloId(item_receita.fk_receita)} </td>
                                    <td>{encontrarNomePeloId(item_receita.fk_medicamento)} </td>
                                    <td>{item_receita.createdAt} </td>
                                    <td>{item_receita.updatedAt} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReadItem_receita;