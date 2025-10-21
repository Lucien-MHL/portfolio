export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-green mb-4 font-mono">Hello World. I'm</div>
        <h1 className="text-lightest-slate mb-4 text-5xl font-bold md:text-7xl">
          Lucien
        </h1>
        <h2 className="text-slate mb-4 text-2xl font-bold md:text-4xl">
          專注於解決問題的前端工程師
        </h2>
        <p className="text-slate mb-8 max-w-2xl text-lg leading-relaxed md:text-xl">
          擅長技術選型、架構優化與團隊協作流程改善。
        </p>
      </div>
    </section>
  )
}
