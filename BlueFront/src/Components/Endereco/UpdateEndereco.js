import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateEndereco() {
  const { id } = useParams();
  const [endereco, setEndereco] = useState({
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setEndereco((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };
  useEffect(() => {
    axios.get("http://localhost:8081/endereco/" + id)
      .then(res => {
        //console.log("Valor do parametro"+id);
        console.log(res);
        setEndereco(res.data);
      })
      .catch(err => console.log(err))
  }, []);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/endereco/${id}`,
        endereco);
      navigate("/endereco");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="quadro">
      <h1>Formulário para Editar Endereços</h1>
      <form>

        <div className="mb-3 mt-3">
          <label className="form-label"> CEP:</label>
          <input type="text" className="form-control" id="cep"
            placeholder="Informe o CEP" name="cep" value={endereco.cep}
            onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label"> Rua:</label>
          <input type="text" className="form-control" id="rua"
            placeholder="Informe a Rua" name="rua" value={endereco.rua}
            onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label"> Numero:</label>
          <input type="text" className="form-control" id="numero"
            placeholder="Digite o numero " name="numero" value={endereco.rua}
            onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label"> Bairro:</label>
          <input type="text" className="form-control" id="bairro"
            placeholder="Informe o Bairro" name="bairro" value={endereco.bairro}
            onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label"> Cidade:</label>
          <input type="text" className="form-control" id="cidade"
            placeholder="Informe a Cidade" name="cidade" value={endereco.cidade}
            onChange={handleChange} />
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label"> UF:</label>
          <input type="text" className="form-control" id="uf"
            placeholder="Informe a Unidade Federal" name="uf" value={endereco.uf}
            onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary"
          onClick={handleClick}>Cadastrar</button>
        <br />
      </form>
      <div className='quadro d-flex justify-content-center'>
        <Link to="/endereco">Veja todos os Endereços</Link>
      </div>
    </div>
  )
}
export default UpdateEndereco;