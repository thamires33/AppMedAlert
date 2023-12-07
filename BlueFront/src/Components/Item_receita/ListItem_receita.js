import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListItem_receita = () => {
    const [item_receita, setItem_receitas] = useState([]);
    const [receitas, setReceitas] = useState([]);
    const [medicamentos, setMedicamentos] = useState([])
    //Listar Item_receita
    useEffect(() => {
        const fetchAllItens = async () => {
            try {
                const res = await axios.get("http://localhost:8081/item_receita");
                setItem_receitas(res.data);

                const receitasResponse = await axios.get('http://localhost:8081/receita');
                setReceitas(receitasResponse.data);

                const medicamentosResponse = await axios.get('http://localhost:8081/medicamento');
                setMedicamentos(medicamentosResponse.data);


            } catch (err) {
                console.log(err);
            }
        };
        fetchAllItens();
    }, []);
    console.log(item_receita);
    //Deletar Item_receita
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/item_receita/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };

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
            <h2 className='w-100 d-flex justify-content-center p-3'>Listando
                Item_receita</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/addItem_receita" className="btn btn-success">Adicionar novo Item</Link></p>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Instruções</th>
                                    <th>Quantidade</th>
                                    <th>Receita</th>
                                    <th>Medicamento</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item_receita.map((item_receita) => {
                                    return (
                                        <tr>
                                            <td>{item_receita.id}</td>
                                            <td>{item_receita.instrucoes} </td>
                                            <td>{item_receita.quantidade} </td>
                                            <td>{encontrarReceitaPeloId(item_receita.fk_receita)} </td>
                                            <td>{encontrarNomePeloId(item_receita.fk_medicamento)} </td>
                                            <td>{item_receita.createdAt} </td>
                                            <td>{item_receita.updatedAt}
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/readItem_receita/${item_receita.id}`} className="btn btn-success mx2">Ler</Link>
                                                <Link
                                                    to={`/updateItem_receita/${item_receita.id}`} className="btn btn-info mx2">Editar</Link>
                                                <button
                                                    onClick={() => handleDelete(item_receita.id)} className="btn btn-danger">Deletar</button>
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
export default ListItem_receita;