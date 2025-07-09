import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'AEE-T - Advanced Energy Efficiency Technology',
  description: 'Leading energy efficiency and technology solutions provider, helping organizations reduce costs and environmental impact through innovative approaches.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}