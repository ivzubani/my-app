export default function Home() {
  return (
    <div className="min-h-screen gradient-mesh">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]/80 bg-[var(--background)]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="rounded-lg bg-green-400/20 px-2 py-0.5 font-mono text-sm text-green-400">
              flow
            </span>
            base
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
              Funzionalità
            </a>
            <a href="#pricing" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
              Prezzi
            </a>
            <a href="#" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
              Documentazione
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Accedi
            </a>
            <a
              href="#"
              className="rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-[var(--background)] transition-all hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/25"
            >
              Inizia gratis
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Nuovo: integrazioni con Notion e Slack
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Automatizza il tuo
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent glow-text">
                {" "}workflow
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)] md:text-xl">
              Piattaforma tutto-in-uno per automatizzare task, integrare strumenti e far crescere il team
              senza complessità. Setup in minuti, risultati da subito.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-semibold text-[var(--background)] transition-all hover:bg-green-400 hover:shadow-xl hover:shadow-green-500/30 sm:w-auto"
              >
                Prova gratuita
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-8 py-4 text-base font-medium transition-colors hover:border-green-500/50 hover:bg-green-500/5 sm:w-auto"
              >
                Guarda la demo
              </a>
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Nessuna carta richiesta · 14 giorni di prova · Cancellazione in un click
            </p>
          </div>
        </section>

        {/* Feature grid */}
        <section id="features" className="border-t border-[var(--border)] py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Tutto ciò che ti serve, in un unico posto
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
                Connetti gli strumenti che usi ogni giorno e lascia che Flowbase faccia il resto.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Automazioni visive",
                  description:
                    "Crea flussi con un editor drag-and-drop. Nessun codice, nessun deploy: modifica e attiva in tempo reale.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  ),
                },
                {
                  title: "Integrazioni native",
                  description:
                    "Slack, Notion, Google Workspace, GitHub e decine di app. Connettori mantenuti e aggiornati da noi.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  ),
                },
                {
                  title: "Sicurezza enterprise",
                  description:
                    "SSO, audit log, dati crittografati e conformità SOC 2. Il tuo team e i tuoi clienti sono al sicuro.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: "Analytics in tempo reale",
                  description:
                    "Dashboard con metriche su esecuzioni, errori e latenza. Individua i colli di bottiglia al volo.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
                {
                  title: "Team e permessi",
                  description:
                    "Ruoli personalizzabili, spazi per progetto e condivisione sicura. Collabora senza caos.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
                {
                  title: "API first",
                  description:
                    "Integra Flowbase nelle tue app con REST e webhook. Documentazione OpenAPI e SDK ufficiali.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ),
                },
              ].map((feature, i) => (
                <article
                  key={i}
                  className="glow-border rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 p-6 transition-all hover:border-green-500/30 hover:bg-[var(--card)]"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-green-500/15 p-3 text-green-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats / social proof */}
        <section className="border-t border-[var(--border)] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 text-center">
              <div>
                <p className="text-3xl font-bold text-green-400 md:text-4xl">10k+</p>
                <p className="mt-1 text-sm text-[var(--muted)]">team attivi</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-400 md:text-4xl">2M+</p>
                <p className="mt-1 text-sm text-[var(--muted)]">automazioni/mese</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-400 md:text-4xl">99.9%</p>
                <p className="mt-1 text-sm text-[var(--muted)]">uptime SLA</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--border)] py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Pronto a semplificare il workflow?
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Unisciti a migliaia di team che usano Flowbase ogni giorno.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="w-full rounded-full bg-green-500 px-8 py-4 text-base font-semibold text-[var(--background)] transition-all hover:bg-green-400 sm:w-auto"
              >
                Inizia la prova gratuita
              </a>
              <a href="#" className="text-sm text-green-400 hover:underline">
                Contatta le vendite →
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--border)] py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <a href="#" className="flex items-center gap-2 font-semibold">
                <span className="rounded-lg bg-green-400/20 px-2 py-0.5 font-mono text-sm text-green-400">
                  flow
                </span>
                base
              </a>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--muted)]">
                <a href="#" className="transition-colors hover:text-[var(--foreground)]">
                  Privacy
                </a>
                <a href="#" className="transition-colors hover:text-[var(--foreground)]">
                  Termini
                </a>
                <a href="#" className="transition-colors hover:text-[var(--foreground)]">
                  Cookie
                </a>
                <a href="#" className="transition-colors hover:text-[var(--foreground)]">
                  Status
                </a>
              </div>
            </div>
            <p className="mt-8 text-center text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} Flowbase. Tutti i diritti riservati.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
