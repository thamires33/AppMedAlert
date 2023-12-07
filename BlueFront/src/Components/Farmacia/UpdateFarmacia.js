import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateFarmacia() {
  const { id } = useParams();
  const [farmacia, setFarmacia] = useState({
    nome: '',
    contato: '',
    fk_endereco: '',
  });

  const [enderecos, setEnderecos] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFarmacia((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };
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

    axios.get("http://localhost:8081/farmacia/" + id)
      .then(res => {
        //console.log("Valor do parametro"+id);
        console.log(res);
        setFarmacia(res.data);
      })
      .catch(err => console.log(err))
  }, []);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/farmacia/${id}`,
        farmacia);
      navigate("/farmacia");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="quadro">
      <h1>Formulário para Editar as Farmacias</h1>
      <form>
        <div className="mb-3 mt-3">
          <label className="form-label"> ID:</label>
          <input type="text" className="form-control" id="id"
            placeholder="ID"
            name="id" value={farmacia.id} disabled
            onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            placeholder="Digite o nome da Farmacia"
            name="nome" value={farmacia.nome}
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
            name="contato" value={farmacia.contato}
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
        <button type="submit" className="btn btn-primary"
          onClick={handleClick}>Alterar</button>
      </form>
      <div className='quadro d-flex justify-content-center'>
        <Link to="/farmacia">Veja todas as Farmacias</Link>
      </div>
    </div>
  )
}
export default UpdateFarmacia;