import Image from 'next/image';

export default function LocalPage() {
  return (
    <div className="bg-white">
      <div className="relative h-96 w-full">
        <Image 
          src="/images/igatu-rua.jpg" // Pode usar a imagem que preferir aqui
          alt="Rua de pedra na vila de Igatu"
          fill // A sintaxe moderna, substituindo layout="fill"
          className="object-cover" // A sintaxe moderna, substituindo objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center"> 
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Igatu: O Coração de Pedra da Chapada
          </h1>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4 text-lg text-stone-700">
        <div className="max-w-4xl mx-auto">
          <p className="mb-6">
            Bem-vindo a Igatu, um distrito de Andaraí cravado no coração do Parque Nacional da Chapada Diamantina. Conhecida como a “Machu Picchu baiana”, a vila é famosa por suas ruas de pedra e ruínas de casas de garimpeiros do século XIX, um testemunho vivo do ciclo do diamante na região.
          </p>
          <p className="mb-12 md:text-justify">
            A atmosfera única de Igatu, onde a história e a natureza se encontram, faz dela o cenário perfeito para um evento que celebra a palavra e a arte. Perca-se em suas vielas, explore a galeria de arte a céu aberto e sinta a inspiração que emana de cada pedra.
          </p>

          <div className="border-t border-stone-200 pt-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Como Chegar</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-stone-800">De Carro</h3>
                <p className="md:text-justify">O acesso principal a Andaraí é pela BA-142. A partir do centro de Andaraí, siga as placas para Igatu por uma estrada de paralelepípedos de aproximadamente 12 km. A viagem é cênica e parte da experiência.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-800">De Ônibus</h3>
                <p className="md:text-justify">Empresas de ônibus (como a Rápido Federal) partem de Salvador para cidades próximas como Seabra, Palmeiras e Andaraí. De Andaraí, é possível pegar transportes locais (kombis ou moto-táxis) para subir até a vila de Igatu.</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-200 pt-12 mt-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Onde Ficar</h2>
            <p className="md:text-justify">Igatu possui uma variedade de pousadas charmosas e casas para aluguel, que oferecem uma experiência autêntica e acolhedora. Recomendamos fazer sua reserva com antecedência, especialmente durante o período da feira.</p>
          </div>
        </div>
      </div>
    </div>
  );
}