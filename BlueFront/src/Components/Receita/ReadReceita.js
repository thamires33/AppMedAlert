import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ReadReceita = () => {
    const { id } = useParams();
    const [receita, setReceita] = useState([]);
    const [medicos, setMedico] = useState([]);
    const [pacientes, setPaciente] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/receita/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setReceita(res.data);
            })

        axios.get("http://localhost:8081/medico/")
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setMedico(res.data);
            })

        axios.get("http://localhost:8081/paciente/")
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setPaciente(res.data);
            })

            .catch(err => console.log(err))
    }, []);

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
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Detalhes da Receita</h1>
                    <div className="table-responsive"> {/* Adicionado container responsivo para limitar a largura da tabela */}
                        <table className="table">
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
                                </tr>
                            </thead>
                            <tbody>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReadReceita;