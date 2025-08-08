// src/app/autores/page.tsx

import AuthorCard from "@/components/AuthorCard";
import { getAutores } from "@/lib/autores";

export default function AutoresPage() {
  const todosAutores = getAutores();

  return (
    <div className="bg-stone-100">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center text-stone-800 mb-12">
          Convidados
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {todosAutores.map((autor) => (
            <AuthorCard
              key={autor.id}
              id={autor.id} // <-- A linha que faltava provavelmente está aqui
              name={autor.name}
              title={autor.title}
              imageUrl={autor.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}