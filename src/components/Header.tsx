// // src/components/Header.tsx

// import Link from 'next/link';

// export default function Header() {
//   return (
//     <header className="bg-stone-800 text-stone-100 shadow-md">
//       <nav className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <div className="text-xl font-bold">
//           <Link href="/" className="hover:text-amber-400 transition-colors">
//             Feira de Igatu
//           </Link>
//         </div>

//         {/* Links de Navegação */}
//         <ul className="flex items-center space-x-6">
//           <li>
//             <Link href="/programacao" className="hover:text-amber-400 transition-colors">
//               Programação
//             </Link>
//           </li>
//           <li>
//             <Link href="/autores" className="hover:text-amber-400 transition-colors">
//               Autores
//             </Link>
//           </li>
//           <li>
//             <Link href="/local" className="hover:text-amber-400 transition-colors">
//               O Local
//             </Link>
//           </li>
//           <li>
//             <Link href="/contato" className="hover:text-amber-400 transition-colors">
//               Contato
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// src/components/Header.tsx

import Link from 'next/link';
import { BsInstagram, BsFacebook, BsTwitterX } from 'react-icons/bs'; // Mantendo os ícones caso queiramos adicioná-los no header no futuro

export default function Header() {
  return (
    <header className="bg-stone-800 text-stone-100 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        {/* 1. Aplicando a fonte Lora e aumentando o tamanho */}
        <div className="text-2xl font-bold font-lora"> 
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Feira de Igatu
          </Link>
        </div>

        {/* Links de Navegação */}
        {/* 2. Aplicando o peso semibold na fonte Source Sans Pro (herdada) */}
        <ul className="flex items-center space-x-6 font-semibold">
          <li>
            <Link href="/programacao" className="hover:text-amber-400 transition-colors">
              Programação
            </Link>
          </li>
          <li>
            <Link href="/autores" className="hover:text-amber-400 transition-colors">
              Autores
            </Link>
          </li>
          <li>
            <Link href="/local" className="hover:text-amber-400 transition-colors">
              O Local
            </Link>
          </li>
          <li>
            <Link href="/contato" className="hover:text-amber-400 transition-colors">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}