import type { Metadata } from 'next'
// 1. Importe as novas fontes que usaremos do Google Fonts
import { Lora, Source_Sans_3 } from 'next/font/google' 
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// 2. Configure a fonte para os títulos (Lora)
// - subsets: Define os caracteres que vamos usar (latin é o padrão para o nosso alfabeto)
// - weight: Define os pesos da fonte que queremos baixar (400=normal, 700=bold)
// - variable: Cria uma variável CSS (--font-lora) para usarmos onde quisermos
const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
});

// 3. Configure a fonte para o corpo do texto (Source Sans Pro, agora chamada Source_Sans_3)
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-sans',
});

export const metadata: Metadata = {
  title: 'Feira Literária de Igatu',
  description: 'O maior evento literário da Chapada Diamantina.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 4. Aplica as variáveis das fontes na tag <html>
    <html lang="pt-BR" className={`${lora.variable} ${sourceSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}