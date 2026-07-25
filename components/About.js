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
    caption: 'Num campo de escuteiros, na Pedra Amarela, em Sintra',
  },
  {
    src: '/images/miguel/miguel-amigos-estocolmo.jpeg',
    caption: 'Com amigos, em Estocolmo, durante o Erasmus',
  },
  {
    src: '/images/miguel/miguel-aurora-boreal.jpeg',
    caption: 'A ver pela primeira vez uma aurora boreal, na Lapónia',
  },
  {
    src: '/images/miguel/miguel-circulo-artico.jpeg',
    caption: 'No Círculo Polar Ártico, perto da Casa do Pai Natal',
  },
  {
    src: '/images/miguel/miguel-caes-treno.jpeg',
    caption: 'Com os cães de trenó, em Abisko',
  },
  {
    src: '/images/miguel/miguel-amigos-jantar.jpeg',
    caption: 'Um jantar com amigos',
    wide: true,
  },
  {
    src: '/images/miguel/miguel-formatura-tecnico.jpeg',
    caption: 'No dia da defesa da tese de mestrado, sobre Agentic AI',
  },
];

// Pequena rotação alternada por foto, para dar o efeito de fotos espalhadas
// numa mesa/cortiça em vez de alinhadas numa grelha perfeita.
const ROTATIONS = [
  '-rotate-3',
  'rotate-2',
  'rotate-3',
  '-rotate-2',
  'rotate-1',
  '-rotate-3',
  'rotate-2',
];

export default function About() {
  const [intro, ...rest] = bio;

  return (
    <section>
      <p className="text-xs tracking-[0.25em] uppercase text-accent font-semibold mb-4">
        sobre mim
      </p>

      <p className="font-display italic text-2xl md:text-3xl text-ink leading-snug max-w-2xl mb-6">
        {intro}
      </p>

      <div className="max-w-2xl text-ink/80 leading-relaxed space-y-4 mb-20">
        {rest.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="columns-2 sm:columns-3 lg:columns-4 gap-8">
        {photos.map((photo, i) => (
          <figure
            key={photo.src}
            className={`mb-8 break-inside-avoid bg-white p-3 pb-5 rounded-sm shadow-xl ring-1 ring-black/5 ${
              ROTATIONS[i % ROTATIONS.length]
            } hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:z-20 relative transition-all duration-300 ease-out`}
          >
            <div
              className={`relative overflow-hidden bg-line ${
                photo.wide ? 'aspect-[3/2]' : 'aspect-[3/4]'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 45vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center font-display italic text-base text-ink/80 leading-snug">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
