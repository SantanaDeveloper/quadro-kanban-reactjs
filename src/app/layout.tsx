import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import './globals.css'

export const metadata = {
  title: 'Quadro Kanban',
  description: 'Quadro Kanban criado com Next.JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className='min-w-full min-h-screen bg-gray-200'>
        <TopBar />
        <Sidebar />
          {children}
      </body>
    </html>
  )
}
