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
  title: 'Receitas do Miguel',
  description: 'Livro de receitas que fui aprendendo ;).',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body text-ink min-h-screen bg-paper">
        <header className="border-b border-line">
          <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
            <a href="/" className="group">
              <p className="text-xs tracking-[0.2em] uppercase text-accent/80 mb-1">
                caderno nº1
              </p>
              <h1 className="font-display italic text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors">
                Receitas do Miguel
              </h1>
            </a>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
