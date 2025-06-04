import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';
import Footer from '../components/Footer/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nudigi',
  description: 'Landing page da Nudigi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>
          {children} {/* <-- Isso aqui é obrigatório */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
