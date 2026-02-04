import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JB Audiovisual & Tecnologia | Soluções Audiovisuais para Sociedades Médicas',
  description: 'Mais de 16 anos transformando eventos em experiências memoráveis. Soluções audiovisuais inovadoras e personalizadas para sociedades médicas, com tecnologia de ponta e excelência.',
  keywords: 'audiovisual, eventos médicos, transmissão ao vivo, sociedades médicas, tecnologia, streaming, cursos online, AMIB',
  authors: [{ name: 'JB Audiovisual & Tecnologia' }],
  openGraph: {
    title: 'JB Audiovisual & Tecnologia',
    description: 'Soluções audiovisuais inovadoras para sociedades médicas',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
