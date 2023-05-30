import { SessionProvider } from 'next-auth/react';
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
        <SessionProvider>
          <div className='main'>
            <div className='gradient'></div>
          </div>

          <Navbar />
            
          <main className='app'>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
