export default function SectionHeader({ title }) {
  return (
    <h2 className="lg:hidden text-3xl font-bold text-slate-200 mb-8 pb-4 border-b border-slate-800/50">
      {title}
    </h2>
  );
}