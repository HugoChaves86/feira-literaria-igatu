import { getEventos } from "@/lib/programacao";
import ProgramacaoClient from "./ProgramacaoClient"; // Importa nosso novo componente

// Este é um Server Component por padrão (sem 'use client')
export default function ProgramacaoPage() {
  // 1. Busca os dados no servidor
  const todosEventos = getEventos();

  return (
    <div className="bg-stone-100 min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center text-stone-800 mb-12">
          Programação Completa
        </h1>
        {/* 2. Passa os dados como prop para o componente de cliente */}
        <ProgramacaoClient eventos={todosEventos} />
      </div>
    </div>
  );
}