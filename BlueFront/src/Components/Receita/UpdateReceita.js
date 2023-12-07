import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateReceita() {
  const { id } = useParams();
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
  const handleChange = (e) => {
    setReceita((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };
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

    axios.get("http://localhost:8081/receita/" + id)
      .then(res => {
        //console.log("Valor do parametro"+id);
        console.log(res);
        setReceita(res.data);
      })
      .catch(err => console.log(err))
  }, []);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/receita/${id}`,
        receita);
      navigate("/receita");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="quadro">
      <h1>Formulário para Editar as Receitas</h1>
      <form>
        <div className="mb-3 mt-3">
          <label className="form-label"> ID:</label>
          <input type="text" className="form-control" id="id"
            placeholder="ID"
            name="id" value={receita.id} disabled
            onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label"> Data:</label>
          <input type="text" className="form-control"
            id="data" placeholder="Data"
            name="data" value={receita.data}
            onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label"> Diagnostico:</label>
          <input type="text" className="form-control"
            id="diagnostico" placeholder="Diagnostico"
            name="diagnostico" value={receita.diagnostico}
            onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label"> Observações:</label>
          <input type="text" className="form-control"
            id="observacoes" placeholder="Observações"
            name="observacoes" value={receita.observacoes}
            onChange={handleChange} />
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

        <div className="mb-3 mt-3">
          <label className="form-label">createdAt:</label>
          <input type="text" className="form-control"
            id="createdAt" placeholder="Data da criação"
            name="createdAt"
            value={receita.createdAt} onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">updatedAt:</label>
          <input type="text" className="form-control"
            id="updatedAt" placeholder="Data de Alteração"
            name="updatedAt" value={receita.updatedAt}
            onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary"
          onClick={handleClick}>Alterar</button>
      </form>
      <div className='quadro d-flex justify-content-center'>
        <Link to="/receita">Veja todas as Receitas</Link>
      </div>
    </div>
  )
}
export default UpdateReceita;