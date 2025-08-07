import Link from 'next/link';
// 1. Importamos os ícones que queremos usar
import { BsInstagram, BsFacebook, BsTwitterX } from 'react-icons/bs';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-800 text-stone-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left px-4">
        {/* Copyright */}
        <div className="mb-4 md:mb-0">
          <p>&copy; {currentYear} Feira Literária de Igatu. Todos os direitos reservados.</p>
          <p className="text-sm text-stone-400">Um evento da comunidade para a comunidade.</p>
        </div>

        {/* 2. Seção de Redes Sociais com Ícones */}
        <div className="flex space-x-6">
          <Link 
            href="https://www.instagram.com/" // <-- SUBSTITUA AQUI
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Feira Literária de Igatu" 
            className="text-stone-400 hover:text-amber-500 transition-colors"
          >
            <BsInstagram size={24} />
          </Link>
          <Link 
            href="https://www.facebook.com/" // <-- SUBSTITUA AQUI
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook da Feira Literária de Igatu" 
            className="text-stone-400 hover:text-amber-500 transition-colors"
          >
            <BsFacebook size={24} />
          </Link>
          <Link 
            href="https://www.twitter.com/" // <-- SUBSTITUA AQUI
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X da Feira Literária de Igatu" 
            className="text-stone-400 hover:text-amber-500 transition-colors"
          >
            <BsTwitterX size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}