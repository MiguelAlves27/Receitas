export default function Tag({ children }) {
  return (
    <span className="inline-block text-[0.65rem] tracking-wide uppercase font-medium text-ink/60 border border-line rounded-full px-2.5 py-0.5">
      {children}
    </span>
  );
}
