import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import Link from 'next/link';
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
        <header className="border-b-2 border-accent bg-white">
          <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display italic text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors">
                Receitas do Miguel
              </h1>
            </Link>
            <Link
              href="/sobre"
              className="text-sm font-semibold text-white bg-accent hover:bg-accentDark rounded-full px-4 py-2 transition-colors"
            >
              Sobre mim
            </Link>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
