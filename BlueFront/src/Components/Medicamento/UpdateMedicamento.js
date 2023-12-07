import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateMedicamento() {
    const { id } = useParams();
    const [medicamento, setMedicamentos] = useState({
        nome: "",
        dosagem: "",
        fabricante: "",
        tarja: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setMedicamentos((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };
    useEffect(() => {
        axios.get("http://localhost:8081/medicamento/" + id)
            .then(res => {
                //console.log("Valor do parametro"+id);
                console.log(res);
                setMedicamentos(res.data);
            })
            .catch(err => console.log(err))
    }, []);
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/medicamento/${id}`,
                medicamento);
            navigate("/medicamento");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="quadro">
            <h1>Formulário para Editar Medicamentos</h1>
            <form>

                <div className="mb-3 mt-3">
                    <label className="form-label"> ID:</label>
                    <input type="text" className="form-control" id="id"
                        placeholder="ID"
                        name="id" value={medicamento.id} disabled
                        onChange={handleChange} />
                </div>

                <div className="mb-3 mt-3">
                    <label className="form-label"> Nome</label>
                    <input type="text" className="form-control"
                        id="nome" placeholder="Nome do Medico"
                        name="nome" value={medicamento.nome}
                        onChange={handleChange} />
                </div>

                <div className="mb-3 mt-3">
                    <label className="form-label"> dosagem:</label>
                    <input type="text" className="form-control"
                        id="dosagem" placeholder="Informe a dosagem"
                        name="dosagem" value={medicamento.dosagem}
                        onChange={handleChange} />
                </div>

                <div className="mb-3 mt-3">
                    <label className="form-label"> Fabricante:</label>
                    <input type="text" className="form-control" id="fabricante"
                        placeholder="Informe o fabricante " name="fabricante" value={medicamento.fabricante}
                        onChange={handleChange} />
                </div>

                <div className="mb-3 mt-3">
                    <label className="form-label"> Tarja:</label>
                    <input type="text" className="form-control" id="tarja"
                        placeholder="Informe a tarja" name="tarja" value={medicamento.tarja}
                        onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary"
                    onClick={handleClick}>Cadastrar</button>
                <br />
        
            </form>
            <div className='quadro d-flex justify-content-center'>
                <Link to="/medicamento">Veja todos os medicamentos</Link>
            </div>
        </div>
    )
}
export default UpdateMedicamento;