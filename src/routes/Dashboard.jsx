import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('senha');
    alert('Saindo...');
    navigate('/');
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
        <p className="text-gray-600 mb-8">Bem-vindo à sua área de administração!</p>
        
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
        >
          <MdLogout className="mr-2" size={20} />
          Sair
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
