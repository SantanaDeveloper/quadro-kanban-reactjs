import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import './globals.css'

export const metadata = {
  title: 'Quadro Kanban | Santana Developer',
  description: 'Quadro Kanban criado com Next.JS',
  themeColor: '#9333ea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className='min-w-full min-h-screen bg-purple-100'>
        <TopBar />
        <Sidebar />
          {children}
      </body>
    </html>
  )
}
