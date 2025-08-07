// src/components/Hero.tsx

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay Escuro para Legibilidade */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          A Magia da Palavra em Igatu
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
          Conectando leitores e autores no coração de pedra da Chapada Diamantina.
        </p>
        <Link 
          href="/programacao" 
          className="bg-amber-500 text-stone-900 font-bold py-3 px-8 rounded-full hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
        >
          Veja a Programação
        </Link>
      </div>
    </section>
  );
}