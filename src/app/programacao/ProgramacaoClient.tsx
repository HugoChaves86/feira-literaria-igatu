'use client'; // Este é o nosso componente interativo

import { useState } from 'react';

// Definimos o tipo de dados que este componente espera receber
type Evento = {
  id: string;
  contentHtml: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  participants: string[];
};

interface EventosAgrupados {
  [key: string]: Evento[];
}

// Recebemos a lista de eventos como uma propriedade 'eventos'
export default function ProgramacaoClient({ eventos }: { eventos: Evento[] }) {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setSelectedEventId(selectedEventId === id ? null : id);
  };

  const eventosPorDia = eventos.reduce((acc, evento) => {
    const data = evento.date;
    if (!acc[data]) {
      acc[data] = [];
    }
    acc[data].push(evento);
    return acc;
  }, {} as EventosAgrupados);

  // O resto do JSX é exatamente o mesmo que tínhamos antes
  return (
    <div className="space-y-12">
      {Object.keys(eventosPorDia).map((data) => (
        <div key={data}>
          <h2 className="text-2xl font-bold text-amber-600 border-b-2 border-amber-200 pb-2 mb-6">
            {new Date(data + 'T00:00:00').toLocaleDateString('pt-BR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </h2>
          <div className="space-y-4">
            {eventosPorDia[data].map((evento) => (
              <div key={evento.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-stone-50 transition-colors"
                  onClick={() => handleCardClick(evento.id)}
                >
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <p className="text-xl font-bold text-stone-800">{evento.time}</p>
                      <p className="text-sm text-amber-700 font-semibold">{evento.type}</p>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-stone-900">{evento.title}</h3>
                      <p className="text-stone-600 mt-1">
                        <span className="font-semibold">Local:</span> {evento.location}
                      </p>
                      <p className="text-stone-600">
                        <span className="font-semibold">Com:</span> {evento.participants.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
                {selectedEventId === evento.id && (
                  <div className="px-6 pb-6 border-t border-stone-200">
                    <div
                      className="prose prose-stone mt-4"
                      dangerouslySetInnerHTML={{ __html: evento.contentHtml }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}