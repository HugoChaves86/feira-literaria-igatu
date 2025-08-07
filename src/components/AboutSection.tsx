import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-stone-100 py-16 md:py-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
        {/* Coluna de Texto */}
        <div className="text-stone-800">
          <h2 className="text-4xl font-bold mb-4">
            Um Encontro com a Literatura e a Natureza
          </h2>
          <p className="mb-4 md:text-justify">
            A Feira Literária de Igatu nasce do desejo de unir a riqueza da literatura brasileira com o cenário histórico e natural único da Chapada Diamantina. Em meio às ruínas de uma cidade de pedra, celebramos a palavra, a arte e a cultura.
          </p>
          <p className="mb-4 md:text-justify">
            Nossa programação conta com mesas de debate, oficinas, lançamentos de livros e apresentações culturais, promovendo um diálogo vibrante entre autores consagrados, novos talentos e o público leitor.
          </p>
        </div>

        {/* Coluna da Imagem */}
        <div className="relative h-80 w-full rounded-lg shadow-xl overflow-hidden">
          <Image
            src="/images/igatu-detalhe.jpg" // Usaremos uma nova imagem aqui
            alt="Detalhe das ruínas de pedra de Igatu"
            layout="fill"
            objectFit="cover"
            className="transform hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}