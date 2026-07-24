export default function Tag({ children }) {
  return (
    <span className="inline-block text-[0.65rem] tracking-wide uppercase font-medium text-azulejo/80 border border-azulejo/30 rounded-full px-2.5 py-0.5">
      {children}
    </span>
  );
}
