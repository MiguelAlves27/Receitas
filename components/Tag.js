import { tagColor } from '../lib/colors';

export default function Tag({ children }) {
  const color = tagColor(children);
  return (
    <span
      className={`inline-block text-[0.7rem] tracking-wide font-medium rounded-full px-2.5 py-1 border ${color.bg} ${color.text} ${color.border}`}
    >
      {children}
    </span>
  );
}
