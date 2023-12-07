import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateMedico() {
    const { id } = useParams();
    const [medico, setMedico] = useState({
        nome: "",
        sobrenome: "",
        especialidade: "",
        CRM: "",
        contato: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setMedico((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };
    useEffect(() => {
        axios.get("http://localhost:8081/medico/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setMedico(res.data);
            })
            .catch(err => console.log(err))
    }, []);
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/medico/${id}`,
                medico);
            navigate("/medico");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="quadro">
            <h1>Formulário para Editar a Medico</h1>
            <form>

                <div className="mb-3 mt-3">
                    <label className="form-label"> ID:</label>
                    <input type="text" className="form-control" id="id"
                        placeholder="ID"
                        name="id" value={medico.id} disabled
                        onChange={handleChange} />
                </div>

                <div className="mb-3 mt-3">
                    <label className="form-label"> Nome</label>
                    <input type="text" className="form-control"
                        id="nome" placeholder="Nome do Medico"
                        name="nome" value={medico.nome}
                        onChange={handleChange} />
                </div>

                <div className="mb-3 mt-3">
                    <label className="form-label"> Sobrenome:</label>
                    <input type="text" className="form-control"
                        id="sobrenome" placeholder="Informe o sobrenome"
                        name="sobrenome" value={medico.sobrenome}
                        onChange={handleChange} />
                </div>

                <div className="mb-3 mt-3">
                    <label className="form-label"> Especialidade:</label>
                    <input type="text" className="form-control" id="especialidade"
                        placeholder="Digite a especialidade " name="especialidade" value={medico.especialidade}
                        onChange={handleChange} />
                </div>

                <div className="mb-3 mt-3">
                    <label className="form-label"> CRM:</label>
                    <input type="text" className="form-control" id="CRM"
                        placeholder="Digite o CRM do Medico" name="CRM" value={medico.CRM}
                        onChange={handleChange} />
                </div>

                <div className="mb-3 mt-3">
                    <label className="form-label"> Contato:</label>
                    <input type="text" className="form-control" id="contato"
                        placeholder="Digite o numero de contato" name="contato" value={medico.contato}
                        onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary"
                    onClick={handleClick}>Cadastrar</button>
                <br />
              
            </form>
            <div className='quadro d-flex justify-content-center'>
                <Link to="/medico">Veja todos os medicos</Link>
            </div>
        </div>
    )
}
export default UpdateMedico;