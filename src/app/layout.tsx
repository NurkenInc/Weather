import Navbar from '@components/Basic/Navbar';
import Provider from '@components/Basic/Provider';

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
        <Provider>
          <div className='main'>
            <div className='gradient'></div>
          </div>

          <Navbar />
            
          <main className='app'>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
