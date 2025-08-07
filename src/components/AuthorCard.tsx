import Image from 'next/image';
import Link from 'next/link';

interface AuthorCardProps {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
}

export default function AuthorCard({ id, name, title, imageUrl }: AuthorCardProps) {
  return (
    <Link href={`/autores/${id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-300 h-full">
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={`Foto de ${name}`}
            fill={true}
            style={{objectFit: "cover"}}
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-bold text-stone-800">{name}</h3>
          <p className="text-stone-600">{title}</p>
        </div>
      </div>
    </Link>
  );
}