import { useState } from 'react';
import Imagem1 from '../assets/Imagem1.png';
import Imagem2 from '../assets/Imagem2.webp';
import Imagem3 from '../assets/Imagem3.jpeg';

const images = [Imagem1, Imagem2, Imagem3];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-8 px-4 flex flex-col items-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-500 mb-4">Energia Sustentável com Hélio-3</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Conheça o futuro da energia limpa com o hélio-3: uma solução sustentável e inovadora para transformar o setor energético.
        </p>
      </header>

      <div className="relative w-full max-w-3xl mb-10">
        <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full hover:bg-indigo-600"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full hover:bg-indigo-600"
        >
          &#10095;
        </button>
      </div>

      <section className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400 mb-4">Por que Hélio-3?</h2>
        <p className="text-gray-300">
          O hélio-3 é um recurso raro, mas altamente eficiente, com o potencial de transformar a geração de energia global. 
          Ao contrário de fontes tradicionais, ele gera eletricidade limpa em larga escala, sem poluir ou gerar resíduos perigosos.
          Estamos comprometidos em tornar o hélio-3 uma realidade sustentável para um futuro melhor.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-indigo-400 mb-3">Sustentabilidade</h3>
          <p className="text-gray-300">
            Energia gerada com hélio-3 possui baixíssimas emissões de carbono, contribuindo para um planeta mais limpo.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-indigo-400 mb-3">Alta Eficiência</h3>
          <p className="text-gray-300">
            Nossa tecnologia aproveita o potencial do hélio-3 para gerar eletricidade de forma extremamente eficiente e confiável.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-indigo-400 mb-3">Segurança</h3>
          <p className="text-gray-300">
            A fusão com hélio-3 é uma tecnologia segura que minimiza a produção de resíduos perigosos e radioativos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
