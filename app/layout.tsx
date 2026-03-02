import './globals.css'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Pasta Pasta — Disney World Orlando',
  description: 'Pasta Pasta: Fresh handmade pasta near Cinderella Castle in Disney World Orlando. Family-friendly, seasonal menu, and magical ambience.',
  openGraph: {
    title: 'Pasta Pasta — Disney World Orlando',
    description: 'Fresh handmade pasta near Cinderella Castle in Disney World Orlando. Family-friendly, seasonal menu, and magical ambience.'
  }
}

export default function RootLayout({children}: {children: React.ReactNode}){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
