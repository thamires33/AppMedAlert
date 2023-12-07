import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateItem_receita() {
  const { id } = useParams();
  const [item_receita, setItem_receita] = useState({
    instrucoes: '',
    quantidade: '',
    fk_receita: '',
    fk_medicamento: '',
  });

  const [receitas, setReceitas] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setItem_receita((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };
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

    axios.get("http://localhost:8081/item_receita/" + id)
      .then(res => {
        //console.log("Valor do parametro"+id);
        console.log(res);
        setItem_receita(res.data);
      })
      .catch(err => console.log(err))
  }, []);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/item_receita/${id}`,
        item_receita);
      navigate("/item_receita");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="quadro">
      <h1>Formulário para Editar os Itens</h1>
      <form>
        <div className="mb-3 mt-3">
          <label className="form-label"> ID:</label>
          <input type="text" className="form-control" id="id"
            placeholder="ID"
            name="id" value={item_receita.id} disabled
            onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label"> Instruções:</label>
          <input type="text" className="form-control"
            id="instrucoes" placeholder="Titulo do Instruções"
            name="instrucoes" value={item_receita.instrucoes}
            onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label"> Quantidade:</label>
          <input type="text" className="form-control"
            id="quantidade" placeholder="Quantidade"
            name="quantidade" value={item_receita.quantidade}
            onChange={handleChange} />
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
    
        <div className="mb-3 mt-3">
          <label className="form-label">createdAt:</label>
          <input type="text" className="form-control"
            id="createdAt" placeholder="Data da criação"
            name="createdAt"
            value={item_receita.createdAt} onChange={handleChange} />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">updatedAt:</label>
          <input type="text" className="form-control"
            id="updatedAt" placeholder="Data de Alteração"
            name="updatedAt" value={item_receita.updatedAt}
            onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary"
          onClick={handleClick}>Alterar</button>
      </form>
      <div className='quadro d-flex justify-content-center'>
        <Link to="/item_receita">Veja todos os Itens</Link>
      </div>
    </div>
  )
}
export default UpdateItem_receita;