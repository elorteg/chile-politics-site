**Found the problem!** Your layout is trying to import `geist/font/sans` and `geist/font/mono` which aren't installed, causing the deployment to fail.

## **🔧 Quick Fix: Replace the Layout**

1. Go to `app/layout.tsx` in GitHub
2. Click the **pencil icon** to edit
3. **Delete everything** and replace with this simpler version:


```typescriptreact
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
```
