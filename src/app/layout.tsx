import Providers from '@/utils/providers'
import './globals.css'
import NavigationMenu from '@/components/ui/NavigationMenu'
// import Tools from '@/components/ui/Tools'
// import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import PageHead from '@/components/ui/pageHead'

export const metadata = {
  title: 'YSS Shop',
  description: "It's a Lifestyle",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <PageHead/>
          <NavigationMenu/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
