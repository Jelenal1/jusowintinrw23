import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JUSO Winterthur NRW23',
  description: 'Nationalratswahlen 23',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
        }
      </body>
    </html>
  );
}
