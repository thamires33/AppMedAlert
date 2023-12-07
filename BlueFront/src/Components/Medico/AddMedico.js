import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddMedico = () => {
    const [medico, setMedico] = useState({
        nome: "",
        sobrenome: "",
        especialidade: "",
        CRM: "",
        contato: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setMedico((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/medico", medico);
            navigate("/medico");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="quadro">
            <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando
                Medico</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Medico</h3>
                    <form>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> Nome:</label>
                            <input type="text" className="form-control" id="nome"
                                placeholder="Informe o nome" name="nome"
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> Sobrenome:</label>
                            <input type="text" className="form-control" id="sobrenome"
                                placeholder="Informe o sobrenome" name="sobrenome"
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> Especialidade:</label>
                            <input type="text" className="form-control" id="especialidade"
                                placeholder="Digite a especialidade " name="especialidade"
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> CRM:</label>
                            <input type="text" className="form-control" id="CRM"
                                placeholder="Digite o CRM do Medico" name="CRM"
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> Contato:</label>
                            <input type="text" className="form-control" id="contato"
                                placeholder="Digite o numero de contato" name="contato"
                                onChange={handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary"
                            onClick={handleClick}>Cadastrar</button>
                        <br />
                        <Link to="/medico">Listar Medicos</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddMedico;