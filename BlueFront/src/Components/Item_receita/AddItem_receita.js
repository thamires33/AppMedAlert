import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddItem_receita = () => {
  const [item_receita, setItem_receita] = useState({
    instrucoes: '',
    quantidade: '',
    fk_receita: '',
    fk_medicamento: '',
  });

  const [receitas, setReceitas] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const receitasResponse = await axios.get('http://localhost:8081/receita');
        setReceitas(receitasResponse.data);

        const medicamentosResponse = await axios.get('http://localhost:8081/medicamento');
        setMedicamentos(medicamentosResponse.data);

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setItem_receita((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/item_receita', item_receita);
      navigate('/item_receita');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="quadro">
      <h2 className="w-100 d-flex justify-content-center p-3">Adicionando Itens a Receita</h2>
      <div className="row">
        <div className="col-md-12">
          <h3>Itens</h3>
          <form>
            <div className="mb-3 mt-3">
              <label className="form-label">Instruções:</label>
              <input
                type="text"
                className="form-control"
                id="instrucoes"
                placeholder="Instruções de Uso"
                name="instrucoes"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 mt-3">
              <label className="form-label">Quantidade:</label>
              <input
                type="text"
                className="form-control"
                id="quantidade"
                placeholder="Quantidade"
                name="quantidade"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Receita:</label>
              <select
                className="form-select"
                id="fk_receita"
                name="fk_receita"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Selecione a Receita
                </option>
                {receitas.map((receita) => (
                  <option key={receita.id} value={receita.id}>
                    {receita.diagnostico}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Medicamento:</label>
              <select
                className="form-select"
                id="fk_medicamento"
                name="fk_medicamento"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Selecione o Medicamento
                </option>
                {medicamentos.map((medicamento) => (
                  <option key={medicamento.id} value={medicamento.id}>
                    {medicamento.nome}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleClick}>
              Cadastrar
            </button>
            <br />
            <Link to="/item_receita">Listar Itens</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem_receita;