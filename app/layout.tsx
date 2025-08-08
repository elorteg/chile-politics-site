import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pulso Nacional - Política Chile',
  description: 'Agregador de noticias y encuestas políticas de Chile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
