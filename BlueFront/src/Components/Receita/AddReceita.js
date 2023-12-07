import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddReceita = () => {
  const [receita, setReceita] = useState({
    data: '',
    diagnostico: '',
    observacoes: '',
    fk_medico: '',
    fk_paciente: '',
  });

  const [medicos, setMedico] = useState([]);
  const [pacientes, setPaciente] = useState([]);
 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const medicosResponse = await axios.get('http://localhost:8081/medico');
        setMedico(medicosResponse.data);

        const pacientesResponse = await axios.get('http://localhost:8081/paciente');
        setPaciente(pacientesResponse.data);

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setReceita((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/receita', receita);
      navigate('/receita');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="quadro">
      <h2 className="w-100 d-flex justify-content-center p-3">Adicionando Receita</h2>
      <div className="row">
        <div className="col-md-12">
          <h3>Receita</h3>
          <form>
            <div className="mb-3 mt-3">
              <label className="form-label">Data:</label>
              <input
                type="text"
                className="form-control"
                id="data"
                placeholder="Informe a Data"
                name="data"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 mt-3">
              <label className="form-label">Diagnostico:</label>
              <input
                type="text"
                className="form-control"
                id="diagnostico"
                placeholder="Diagnostico do Paciente"
                name="diagnostico"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 mt-3">
              <label className="form-label">Observações:</label>
              <input
                type="text"
                className="form-control"
                id="observacoes"
                placeholder="Observações"
                name="observacoes"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Medico:</label>
              <select
                className="form-select"
                id="fk_medico"
                name="fk_medico"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Selecione o Medico
                </option>
                {medicos.map((medico) => (
                  <option key={medico.id} value={medico.id}>
                    {medico.nome}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Paciente:</label>
              <select
                className="form-select"
                id="fk_paciente"
                name="fk_paciente"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Selecione o Paciente
                </option>
                {pacientes.map((paciente) => (
                  <option key={paciente.id} value={paciente.id}>
                    {paciente.nome}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>
              Cadastrar
            </button>
            <br />
            <Link to="/receita">Listar Receitas</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReceita;