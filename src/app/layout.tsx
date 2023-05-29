import Navbar from '@components/Basic/Navbar';
import { LayoutProps } from '@shared/types/layout';
import '@styles/globals.css';

export const metadata = {
  title: "Weather",
  description: 'Checkout wheather any location right now',
}

export default function RootLayout({ children } : LayoutProps) {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>

        <Navbar />
        
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}
