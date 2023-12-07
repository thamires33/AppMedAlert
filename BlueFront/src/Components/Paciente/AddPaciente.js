import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const AddPaciente = () => {
  const [paciente, setPaciente] = useState({
    nome: '',
    sobrenome: '',
    dataNascimento: '',
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
    setPaciente((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/paciente', paciente);
      navigate('/paciente');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="quadro">
      <h2 className="w-100 d-flex justify-content-center p-3">Cadastro de Pacientes</h2>
      <div className="row">
        <div className="col-md-12">

          <div className="formulario"> 
            <form>
                <div className="form-group">
                  <div className="mb-3 mt-3">
                    <label className="form-label">Nome:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      placeholder="Digite o nome"
                      name="nome"
                      autoComplete="off" 
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3 mt-3">
                    <label className="form-label"> Sobrenome:</label>
                    <input type="text" className="form-control" id="sobrenome"
                    placeholder="Informe o sobrenome" name="sobrenome"
                    onChange={handleChange} />
                    </div>
                </div>
                  <div className="form-group">

                      <div className="mb-3 mt-3">
                        <label className="form-label">Data de Nascimento:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="dataNascimento"
                          placeholder="informe a data de nascimento"
                          name="dataNascimento"
                          onChange={handleChange}
                        />
                      </div>
                      
                        <div className="form-group">

                          <div className="mb-3 mt-3">
                            <label className="form-label">Contato:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="contato"
                              placeholder="Digite o numero de contato"
                              name="contato"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                  </div>   

                  <div className="endereco">
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
                  </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>
                      Cadastrar
                    </button>
                  <br />
                  <Link to="/paciente">Listar Pacientes</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPaciente;