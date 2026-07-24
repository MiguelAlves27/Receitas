import Image from 'next/image';

const bio = [
  'Olá! Eu sou o Miguel, Data & AI Engineer que gosta de cozinhar esporadicamente.',
  'Este site começou por um motivo muito simples: estava sempre a perder receitas.',
  'Ao longo dos anos fui aprendendo a cozinhar um bocadinho por todo o lado. Primeiro para ajudar em casa, depois nos escuteiros, onde cozinhar para muita gente faz parte da rotina, e mais tarde durante o meu semestre em Erasmus, quando descobri que, se queria comer bem, tinha mesmo de cozinhar. Pelo meio ainda aproveitei para mostrar aos meus amigos um bocadinho da comida portuguesa.',
  'As receitas que encontras aqui são as que realmente faço. Algumas vieram da família, outras da internet, outras nasceram de experiências que correram melhor do que estava à espera. Quase todas foram sendo ajustadas ao longo do tempo, porque há sempre qualquer coisa que pode ficar melhor.',
  'Não vais encontrar receitas escritas só para parecerem bonitas. Tento que sejam simples, práticas e fáceis de seguir, para que qualquer pessoa as consiga fazer sem complicações.',
  'No fundo, este site é o meu livro de receitas. A diferença é que, em vez de ficar fechado numa gaveta (e com uma letra um tanto que ilegível), está aqui para quem o quiser usar.',
  'Se encontrares uma receita de que gostes, missão cumprida. 🙂',
];

const photos = [
  {
    src: '/images/miguel/miguel-escuteiro.jpeg',
    alt: 'Campo escutista Pedra Amarela em Sintra',
    caption: 'escutismo',
  },
  {
    src: '/images/miguel/miguel-amigos-estocolmo.jpeg',
    alt: 'Com amigos em Estocolmo, durante o Erasmus',
    caption: 'erasmus',
  },
  {
    src: '/images/miguel/miguel-aurora-boreal.jpeg',
    alt: 'Em Erasmus, a ver pela primeira vez uma aurora boreal',
    caption: 'aurora boreal',
  },
  {
    src: '/images/miguel/miguel-circulo-artico.jpeg',
    alt: 'No Círculo Polar Ártico e perto da Casa do Pai Natal, na Lapónia',
    caption: 'círculo ártico',
  },
  {
    src: '/images/miguel/miguel-caes-treno.jpeg',
    alt: 'Cães da Neve, em Abisko',
    caption: 'lapónia',
  },
  {
    src: '/images/miguel/miguel-amigos-jantar.jpeg',
    alt: 'Jantar com amigos',
    caption: 'amigos',
    wide: true,
  },
  {
    src: '/images/miguel/miguel-formatura-tecnico.jpeg',
    alt: 'Dia da minha defesa de tese no mestrado sobre Agentic AI',
    caption: 'data & ai engineer',
  },
];

export default function About() {
  return (
    <section className="mb-14 pb-14 border-b border-line">
      <p className="text-xs tracking-[0.2em] uppercase text-accent/80 mb-4">sobre mim</p>

      <div className="max-w-2xl text-ink/80 leading-relaxed space-y-4 mb-10">
        {bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {photos.map((photo) => (
          <figure key={photo.src} className={photo.wide ? 'col-span-2' : undefined}>
            <div
              className={`relative overflow-hidden rounded-sm bg-line ${
                photo.wide ? 'aspect-[3/2]' : 'aspect-[3/4]'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  photo.wide
                    ? '(min-width: 1024px) 296px, (min-width: 640px) 416px, 90vw'
                    : '(min-width: 1024px) 140px, (min-width: 640px) 200px, 45vw'
                }
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-[0.65rem] tracking-wide uppercase text-ink/40 font-mono">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
