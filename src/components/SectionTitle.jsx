function SectionTitle({ title, subtitle }) {
  return (
    <div className="scroll-animation mb-10 max-w-2xl">
      <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg leading-relaxed text-body">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionTitle;
