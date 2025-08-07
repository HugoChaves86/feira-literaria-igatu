import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const autoresDirectory = path.join(process.cwd(), 'src/content/autores');

export function getAutores() {
  const fileNames = fs.readdirSync(autoresDirectory);
  
  const todosAutores = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(autoresDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { name: string; title: string; imageUrl: string; featured: boolean }),
    };
  });
  return todosAutores;
}

export function getAutoresDestaque() {
  const todosAutores = getAutores();
  return todosAutores.filter(autor => autor.featured);
}

// A FUNÇÃO QUE NOSSO NOVO COMPONENTE PRECISA
export async function getAutorById(id: string) {
  const fullPath = path.join(autoresDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { name: string; title: string; imageUrl: string; }),
  };
}