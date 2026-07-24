import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'O Meu Caderno de Receitas',
  description: 'Receitas de culinária guardadas e organizadas — feito à mão, prato a prato.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body text-ink min-h-screen">
        <header className="border-b border-line">
          <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
            <a href="/" className="group">
              <p className="text-xs tracking-[0.2em] uppercase text-azulejo/70 mb-1">
                caderno nº1
              </p>
              <h1 className="font-display italic text-2xl md:text-3xl text-ink group-hover:text-azulejo transition-colors">
                O Meu Caderno de Receitas
              </h1>
            </a>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
        <footer className="max-w-5xl mx-auto px-6 py-10 text-sm text-ink/50 border-t border-line mt-16">
          Feito à mão, prato a prato.
        </footer>
      </body>
    </html>
  );
}
