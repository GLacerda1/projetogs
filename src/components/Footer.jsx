import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex space-x-4 text-2xl">
      <a href="https://www.instagram.com/seu_usuario" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-500">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/seu_usuario" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
        <FaFacebook />
      </a>
      <a href="https://www.linkedin.com/in/seu_usuario" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
        <FaLinkedin />
      </a>
      <a href="mailto:seu_email@example.com" className="text-gray-800 hover:text-red-500">
        <FaEnvelope />
      </a>
    </div>
  );
}

export default Footer;
