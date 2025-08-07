import { getAutores, getAutorById } from "@/lib/autores";
import Image from "next/image";

export async function generateStaticParams() {
  const autores = getAutores();
  return autores.map((autor) => ({
    id: autor.id,
  }));
}

export default async function AutorDetailPage({ params }: { params: { id: string } }) {
  const autor = await getAutorById(params.id);

  return (
    <article className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
            <Image 
              src={autor.imageUrl} 
              alt={`Foto de ${autor.name}`}
              fill={true}
              style={{objectFit: 'cover'}}
            />
          </div>
          <h1 className="text-5xl font-bold text-stone-800">{autor.name}</h1>
          <p className="text-xl text-stone-600 mt-2">{autor.title}</p>
        </div>
        <div 
          className="prose lg:prose-xl max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: autor.contentHtml }} 
        />
      </div>
    </article>
  );
}