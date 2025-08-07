// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// // Define o tipo de dado que esperamos do frontmatter de um evento
// interface EventoData {
//   title: string;
//   type: string;
//   date: string;
//   time: string;
//   location: string;
//   participants: string[];
// }

// const programacaoDirectory = path.join(process.cwd(), 'src/content/programacao');

// export function getEventos() {
//   const fileNames = fs.readdirSync(programacaoDirectory);
  
//   const todosEventos = fileNames.map(fileName => {
//     const id = fileName.replace(/\.md$/, '');
//     const fullPath = path.join(programacaoDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//     const matterResult = matter(fileContents);

//     return {
//       id,
//       ...(matterResult.data as EventoData),
//     };
//   });

//   // **NOVIDADE AQUI:** Ordena os eventos por data e depois por hora
//   return todosEventos.sort((a, b) => {
//     // Cria objetos Date para comparação
//     const dateA = new Date(`${a.date}T${a.time}:00`);
//     const dateB = new Date(`${b.date}T${b.time}:00`);
//     // O sort compara os timestamps; se for negativo, 'a' vem primeiro
//     return dateA.getTime() - dateB.getTime();
//   });
// }

// src/lib/programacao.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface EventoData {
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  participants: string[];
}

const programacaoDirectory = path.join(process.cwd(), 'src/content/programacao');

export function getEventos() {
  const fileNames = fs.readdirSync(programacaoDirectory);
  
  const todosEventos = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(programacaoDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // **NOVA LÓGICA AQUI**
    // Converte o corpo do markdown para HTML de forma síncrona
    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml, // Adicionamos o HTML do conteúdo
      ...(matterResult.data as EventoData),
    };
  });

  return todosEventos.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}:00`);
    const dateB = new Date(`${b.date}T${b.time}:00`);
    return dateA.getTime() - dateB.getTime();
  });
}