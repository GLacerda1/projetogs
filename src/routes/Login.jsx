import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const usuario = useRef();
  const senha = useRef();
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  function validade() {
    for (let i = 0; i < usuarios.length; i++) {
      if (
        usuarios[i].usuario === usuario.current.value &&
        usuarios[i].senha === senha.current.value
      ) {
        return true;
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validade()) {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
        sessionStorage.setItem('usuario', usuario.current.value);
        sessionStorage.setItem('senha', token);
        navigate('/dashboard');
    } else {
      alert('Usuário/Senha inválidos');
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/usuarios/')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUsuarios(res);
      });
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Faça seu Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="usuario" className="block text-sm font-medium text-gray-600">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              ref={usuario}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Digite seu usuário"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="senha" className="block text-sm font-medium text-gray-600">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              ref={senha}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Digite sua senha"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-gray-600 hover:text-indigo-500 cursor-pointer">
                  Esqueceu sua senha?
                </span>
              </li>

              <li>
                <span className="text-sm text-gray-600">Não tem conta?</span>{' '}
                <Link to="/cadastrar" className="text-sm text-indigo-600 hover:underline">
                  Criar uma conta
                </Link>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
