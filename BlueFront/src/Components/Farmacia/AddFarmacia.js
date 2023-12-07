import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddFarmacia = () => {
  const [farmacia, setFarmacia] = useState({
    nome: '',
    contato: '',
    fk_endereco: '',
  });

  const [enderecos, setEnderecos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const autoresResponse = await axios.get('http://localhost:8081/endereco');
        setEnderecos(autoresResponse.data);

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFarmacia((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/farmacia', farmacia);
      navigate('/farmacia');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="quadro">
      <h2 className="w-100 d-flex justify-content-center p-3">Adicionando Farmacias</h2>
      <div className="row">
        <div className="col-md-12">
          <h3>Farmacias</h3>
          <form>

            <div className="mb-3 mt-3">
              <label className="form-label">Nome:</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                placeholder="Digite o nome da Farmacia"
                name="nome"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 mt-3">
              <label className="form-label">Contato:</label>
              <input
                type="text"
                className="form-control"
                id="contato"
                placeholder="Informe o numero de contato"
                name="contato"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Endereco:</label>
              <select
                className="form-select"
                id="fk_endereco"
                name="fk_endereco"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Selecione o Endereco
                </option>
                {enderecos.map((endereco) => (
                  <option key={endereco.id} value={endereco.id}>
                    {endereco.rua}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleClick}>
              Cadastrar
            </button>
            <br />
            <Link to="/farmacia">Listar Farmacias</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFarmacia;