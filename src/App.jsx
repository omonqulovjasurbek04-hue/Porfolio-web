export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] text-[var(--text)] p-8">
      <div className="glass rounded-[24px] p-10 max-w-2xl w-full text-center shadow-xl">
        <h1 className="text-4xl font-black mb-4">
          <span className="grad-text">React + Tailwind</span> tayyor! 🚀
        </h1>
        <p className="text-[var(--text-muted)] leading-relaxed mb-6">
          Loyiha o&apos;chirilmadi — eski <code className="font-mono bg-[var(--code-bg)] px-2 py-1 rounded">index.html</code>, <code className="font-mono bg-[var(--code-bg)] px-2 py-1 rounded">css/</code>, <code className="font-mono bg-[var(--code-bg)] px-2 py-1 rounded">js/</code> fayllaringiz joyida turibdi.
          Bu komponent <code className="font-mono bg-[var(--code-bg)] px-2 py-1 rounded">src/App.jsx</code> orqali ishlayapti.
        </p>
        <div className="flex gap-3 justify-center">
          <a href="#top" className="btn btn-primary">Portfolio ko&apos;rish</a>
          <button
            className="btn btn-outline"
            onClick={() => alert('React ishlayapti!')}
          >
            React test
          </button>
        </div>
        <p className="mt-6 text-sm font-mono text-[var(--text-muted)]">
          O&apos;chirmoqchi bo&apos;lsangiz: <code>src/main.jsx</code> dagi &lt;App /&gt; ni olib tashlang — eski sayt o&apos;z holicha qoladi.
        </p>
      </div>
    </div>
  );
}
