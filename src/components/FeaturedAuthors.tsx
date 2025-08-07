import AuthorCard from './AuthorCard';
// 1. Importe nossa nova função
import { getAutoresDestaque } from '@/lib/autores';

export default function FeaturedAuthors() {
  // 2. Use a função para buscar os dados, em vez do array fixo
  const authors = getAutoresDestaque();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-stone-800 mb-12">
          Convidados de Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <AuthorCard
              key={author.name}
              id={author.id}
              name={author.name}
              title={author.title}
              imageUrl={author.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}