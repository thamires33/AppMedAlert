import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddMedicamento = () => {
    const [medicamento, setMedicamento] = useState({
        nome: "",
        dosagem: "",
        fabricante: "",
        tarja: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setMedicamento((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/medicamento", medicamento);
            navigate("/medicamento");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="quadro">
            <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando
                Medicamentos</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Medicamentos</h3>
                    <form>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> Nome:</label>
                            <input type="text" className="form-control" id="nome"
                                placeholder="Informe o nome" name="nome"
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> Dosagem:</label>
                            <input type="text" className="form-control" id="dosagem"
                                placeholder="Informe a dosagem" name="dosagem"
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> fabricante:</label>
                            <input type="text" className="form-control" id="fabricante"
                                placeholder="Informe o fabricante " name="fabricante"
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> Tarja:</label>
                            <input type="text" className="form-control" id="tarja"
                                placeholder="Informe a tarja" name="tarja"
                                onChange={handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary"
                            onClick={handleClick}>Cadastrar</button>
                        <br />
                        <Link to="/medicamento">Listar Medicamentos</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddMedicamento;