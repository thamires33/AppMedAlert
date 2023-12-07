import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddEndereco = () => {
    const [endereco, setEndereco] = useState({
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: '',
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setEndereco((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8081/endereco", endereco);
            navigate("/endereco");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="quadro">
            <h2 className='w-100 d-flex justify-content-center p-3'>Adicionando Endereços</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Endereço</h3>
                    <form>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> CEP:</label>
                            <input type="text" className="form-control" id="cep"
                                placeholder="Informe o CEP" name="cep"
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> Rua:</label>
                            <input type="text" className="form-control" id="rua"
                                placeholder="Informe a Rua" name="rua"
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> Numero:</label>
                            <input type="text" className="form-control" id="numero"
                                placeholder="Digite o numero " name="numero"
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> Bairro:</label>
                            <input type="text" className="form-control" id="bairro"
                                placeholder="Informe o Bairro" name="bairro"
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> Cidade:</label>
                            <input type="text" className="form-control" id="cidade"
                                placeholder="Informe a Cidade" name="cidade"
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label"> UF:</label>
                            <input type="text" className="form-control" id="uf"
                                placeholder="Informe a Unidade Federal" name="uf"
                                onChange={handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary"
                            onClick={handleClick}>Cadastrar</button>
                        <br />
                        <Link to="/endereco">Listar Enderços</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddEndereco;