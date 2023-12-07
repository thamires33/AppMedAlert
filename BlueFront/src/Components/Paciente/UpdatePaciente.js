import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdatePaciente() {
  const { id } = useParams();
  const [paciente, setPaciente] = useState({
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    contato: '',
    fk_endereco: '',
  });

  const [enderecos, setEnderecos] = useState([]);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setPaciente((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };
  useEffect(() => {

    const fetchData = async () => {
        try {
          const res = await axios.get('http://localhost:8081/endereco');
          setEnderecos(res.data);
  
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      };
    fetchData();

    axios.get("http://localhost:8081/paciente/" + id)
      .then(res => {
        //console.log("Valor do parametro"+id);
        console.log(res);
        setPaciente(res.data);
      })
      .catch(err => console.log(err))
  }, []);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/paciente/${id}`,
        paciente);
      navigate("/paciente");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="quadro">
      <h1>Formulário para Editar Pacientes</h1>
      <form>
        <div className="mb-3 mt-3">
          <label className="form-label"> ID:</label>
          <input type="text" className="form-control" id="id"
            placeholder="ID"
            name="id" value={paciente.id} disabled
            onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label"> Nome:</label>
          <input type="text" className="form-control"
            id="nome" placeholder="Nome do Paciente"
            name="nome" value={paciente.nome}
            onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label"> Sobrenome:</label>
          <input type="text" className="form-control"
            id="sobrenome" placeholder="Sobrenome do Paciente"
            name="sobrenome" value={paciente.sobrenome}
            onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label"> Nascimento:</label>
          <input type="text" className="form-control"
            id="dataNascimento" placeholder="Data de Nascimento do Paciente"
            name="dataNascimento" value={paciente.dataNascimento}
            onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label"> Contato:</label>
          <input type="text" className="form-control"
            id="contato" placeholder="Contato do Paciente"
            name="contato" value={paciente.contato}
            onChange={handleChange} />
        </div>

        <div className="endereco">
                  <div className="mb-3">
                    <label className="form-label">Endereco</label>
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
                </div>
        
        <div className="mb-3 mt-3">
          <label className="form-label">createdAt:</label>
          <input type="text" className="form-control"
            id="createdAt" placeholder="Data da criação"
            name="createdAt"
            value={paciente.createdAt} onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">updatedAt:</label>
          <input type="text" className="form-control"
            id="updatedAt" placeholder="Data de Alteração"
            name="updatedAt" value={paciente.updatedAt}
            onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary"
          onClick={handleClick}>Alterar</button>
      </form>
      <div className='quadro d-flex justify-content-center'>
        <Link to="/Paciente">Veja todos os Pacientes</Link>
      </div>
    </div>
  )
}
export default UpdatePaciente;