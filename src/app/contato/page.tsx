export default function ContatoPage() {
  return (
    <div className="bg-stone-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-stone-600 mb-8">
            Tem alguma dúvida, sugestão ou gostaria de apoiar a Feira Literária de Igatu? Fale conosco através dos canais abaixo.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-stone-800">E-mail</h2>
              <a 
                href="mailto:contato@feiradeigatu.com.br" 
                className="text-amber-600 hover:text-amber-700 text-lg"
              >
                contato@feiradeigatu.com.br
              </a>
              <p className="text-sm text-stone-500 mt-1">Para dúvidas gerais, parcerias e imprensa.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-800">Redes Sociais</h2>
              <p className="text-lg text-stone-600">
                Acompanhe as novidades e bastidores do evento em nossos canais oficiais.
              </p>
              {/* Aqui entrariam os links para as redes sociais */}
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h2 className="text-xl font-bold text-stone-800 mb-4">Ou nos mande uma mensagem</h2>
              {/* Este é um formulário visual, ele não enviará dados */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700">Nome</label>
                  <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700">E-mail</label>
                  <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700">Mensagem</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-stone-800 text-white py-2 px-4 rounded-md hover:bg-stone-700 transition-colors">
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}