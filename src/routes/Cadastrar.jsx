import { useParams, Link, useNavigate } from 'react-router-dom';
import { ImCancelCircle } from 'react-icons/im';
import { useState, useEffect } from 'react';

const CadastrarUsuario = () => {
  let { id } = useParams();
  const [usuarios, setUsuarios] = useState({
    id,
    usuario: '',
    senha: '',
  });

  const navigate = useNavigate();

  let metodo = 'post';
  if (id) {
    metodo = 'put';
  }

  const handleChange = (e) => {
    setUsuarios({ ...usuarios, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/usuarios`, {
      method: metodo,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuarios),
    }).then(() => {
      navigate('/login');
    });
  };
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/usuarios/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUsuarios(data);
        });
    }
  }, [id]);

  return (
    <section className="h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          {id ? 'Editar Usuário' : 'Cadastrar Usuário'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="usuario" className="block text-sm font-medium text-gray-600">
              Usuário
            </label>
            <input
              type="text"
              name="usuario"
              placeholder="Digite seu Usuário"
              value={usuarios.usuario}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-600">
              Senha
            </label>
            <input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              value={usuarios.senha}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {id ? 'Atualizar' : 'Cadastrar'}
          </button>

          <div className="flex justify-between items-center">
            <Link to="/login" className="text-sm text-indigo-600 hover:underline flex items-center space-x-2">
              <ImCancelCircle size={18} />
              <span>Cancelar</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CadastrarUsuario;