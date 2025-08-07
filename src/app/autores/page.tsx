// src/app/autores/[id]/page.tsx

import { getAutores, getAutorById } from "@/lib/autores";
import Image from "next/image";

// 1. Definimos o tipo das props de forma mais explícita
type Props = {
  params: { id: string };
};

// Gera as páginas estaticamente no build
export async function generateStaticParams() {
  const autores = getAutores();
  return autores.map((autor) => ({
    id: autor.id,
  }));
}

// 2. Usamos o tipo 'Props' na assinatura da função
export default async function AutorDetailPage({ params }: Props) {
  const autor = await getAutorById(params.id);

  return (
    <article className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho do Artigo */}
        <div className="text-center mb-12">
          <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
            <Image 
              src={autor.imageUrl} 
              alt={`Foto de ${autor.name}`}
              fill={true}
              style={{objectFit: 'cover'}}
              priority={true} // Bônus: Diz ao Next.js para priorizar o carregamento desta imagem
            />
          </div>
          <h1 className="text-5xl font-bold text-stone-800">{autor.name}</h1>
          <p className="text-xl text-stone-600 mt-2">{autor.title}</p>
        </div>

        {/* Conteúdo do Post (o texto do Markdown) */}
        <div 
          className="prose lg:prose-xl max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: autor.contentHtml }} 
        />
      </div>
    </article>
  );
}