
const Solucao = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10 px-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-500 mb-4">Energia Sustentável com Hélio-3</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Descubra como o hélio-3 está revolucionando o setor energético como uma fonte limpa, segura e sustentável para o futuro.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto flex flex-col space-y-12">
        {/* Section 1: Introdução */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Por que o Hélio-3?</h2>
          <p className="text-gray-300">
            O hélio-3 é uma substância rara, mas com o potencial de revolucionar a energia sustentável. Ao contrário dos combustíveis fósseis e de algumas energias renováveis, ele é capaz de gerar eletricidade em larga escala com uma pegada de carbono praticamente nula.
          </p>
        </section>

        {/* Section 2: Como Funciona */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Como Funciona a Energia com Hélio-3?</h2>
          <p className="text-gray-300">
            A energia gerada pelo hélio-3 é produzida através de um processo de fusão nuclear controlada, que libera grandes quantidades de energia com segurança e sem gerar resíduos radioativos significativos. Essa tecnologia inovadora está sendo desenvolvida para atender a crescente demanda de energia de forma limpa e eficiente.
          </p>
        </section>

        {/* Section 3: Benefícios Sustentáveis */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Benefícios para o Meio Ambiente</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Baixíssimas emissões de carbono, ajudando a reduzir o impacto ambiental.</li>
            <li>Processo de fusão seguro, com resíduos mínimos e sem poluição tóxica.</li>
            <li>Contribuição significativa para a meta de emissão zero e um planeta mais limpo.</li>
          </ul>
        </section>

        {/* Section 4: Futuro da Energia com Hélio-3 */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-2">O Futuro da Energia com Hélio-3</h2>
          <p className="text-gray-300">
            Com o avanço das tecnologias de fusão, o hélio-3 pode se tornar uma das principais fontes de energia limpa em escala global. Nossa visão é integrar essa solução para atender à crescente demanda energética sem comprometer o meio ambiente, oferecendo uma fonte confiável, acessível e sustentável.
          </p>
        </section>
      </main>

      {/* Call to Action */}
      <footer className="text-center mt-10">
        <h3 className="text-2xl font-semibold text-indigo-400">Junte-se à Revolução da Energia Limpa</h3>
        <p className="text-gray-300 mt-2 mb-6 max-w-xl mx-auto">
          Conheça mais sobre nossos avanços com hélio-3 e seja parte de um futuro sustentável. Acesse nosso site ou siga-nos para ficar por dentro das novidades.
        </p>
        <button className="bg-indigo-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-600 transition duration-300">
          Saiba Mais
        </button>
      </footer>
    </div>
  );
};

export default Solucao;
