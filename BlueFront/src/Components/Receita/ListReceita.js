import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListReceitas = () => {
    const [receitas, setReceitas] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [medicos, setMedicos] = useState([]);
    //Listar Receitas
    useEffect(() => {
        const fetchAllReceitas = async () => {
            try {
                const res = await axios.get("http://localhost:8081/receita");
                setReceitas(res.data);

                const resMedicos = await axios.get('http://localhost:8081/medico');
                setMedicos(resMedicos.data);

                const resPacientes = await axios.get('http://localhost:8081/paciente');
                setPacientes(resPacientes.data);


            } catch (err) {
                console.log(err);
            }
        };
        fetchAllReceitas();
    }, []);
    console.log(receitas);
    //Deletar Receitas
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/receita/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };

    const encontrarNomePeloId = (id) => {
        const pacienteEncontrado = pacientes.find((paciente) => paciente.id === id);
        return pacienteEncontrado ? pacienteEncontrado.nome : 'Paciente não encontrado';
    };

    const encontrarMedPeloId = (id) => {
        const medicoEncontrado = medicos.find((medico) => medico.id === id);
        return medicoEncontrado ? medicoEncontrado.nome : 'Medico não encontrado';
    };

    return (
        <div className="quadro">
            <h2 className='w-100 d-flex justify-content-center p-3'>Listando
                Receitas</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <p><Link to="/addReceita" className="btn btn-success">Adicionar nova receita</Link></p>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Data</th>
                                    <th>Diagnostico</th>
                                    <th>Observações</th>
                                    <th>Medico</th>
                                    <th>Paciente</th>
                                    <th>Data Cadastro</th>
                                    <th>Data Alteração</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {receitas.map((receita) => {
                                    return (
                                        <tr>
                                            <td>{receita.id}</td>
                                            <td>{receita.data} </td>
                                            <td>{receita.diagnostico} </td>
                                            <td>{receita.observacoes} </td>
                                            <td>{encontrarMedPeloId(receita.fk_medico)} </td>
                                            <td>{encontrarNomePeloId(receita.fk_paciente)}</td>
                                            <td>{receita.createdAt} </td>
                                            <td>{receita.updatedAt}
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/readReceita/${receita.id}`} className="btn btn-success mx2">Ler</Link>
                                                <Link
                                                    to={`/updateReceita/${receita.id}`} className="btn btn-info mx2">Editar</Link>
                                                <button
                                                    onClick={() => handleDelete(receita.id)} className="btn btn-danger">Deletar</button>
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
export default ListReceitas;