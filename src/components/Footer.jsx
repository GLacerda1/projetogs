import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-indigo-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo ou título do footer */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Black Tech</h3>
            <p className="text-indigo-300 text-sm">Transformando o futuro com hélio-3</p>
          </div>

          {/* Links de navegação */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a href="#" className="text-indigo-300 hover:text-gray-500 transition duration-300">Sobre</a>
            <a href="/solucao" className="text-indigo-300 hover:text-gray-500 transition duration-300">Soluções</a>
            <a href="/login" className="text-indigo-300 hover:text-gray-500 transition duration-300">Login</a>
          </div>

          {/* Ícones das redes sociais */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com" className="text-indigo-300 hover:text-gray-500 transition duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" className="text-indigo-300 hover:text-gray-500 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" className="text-indigo-300 hover:text-gray-500 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" className="text-indigo-300 hover:text-gray-500 transition duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-indigo-400 text-sm">
          <p>&copy; 2024 Black Tech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
