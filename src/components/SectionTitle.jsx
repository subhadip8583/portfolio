export default function SectionTitle({ id, title, subtitle }) {
  return (
    <div id={id} className="mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
