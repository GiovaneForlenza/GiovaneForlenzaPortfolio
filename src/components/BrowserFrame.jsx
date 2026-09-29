function BrowserFrame({ src, alt, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-white shadow-xl shadow-slate-900/10 ${className}`}
    >
      {/* <div className="flex items-center gap-3 border-b border-line bg-slate-50 px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full border bg-lime-700" />
          <span className="h-2.5 w-2.5 rounded-full border bg-blue-500" />
          <span className="h-2.5 w-2.5 rounded-full border bg-emerald-500" />
        </span>
      </div> */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="aspect-[8/7] w-full object-cover object-top"
      />
    </div>
  );
}

export default BrowserFrame;
