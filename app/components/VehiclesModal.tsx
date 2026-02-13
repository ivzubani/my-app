"use client";

import { useState } from "react";

interface Vehicle {
  id: string;
  marca: string;
  modello: string;
  anno: string;
  targa: string;
  colore: string;
}

export default function VehiclesModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [form, setForm] = useState({
    marca: "",
    modello: "",
    anno: "",
    targa: "",
    colore: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.marca.trim()) return;
    const newVehicle: Vehicle = {
      id: crypto.randomUUID(),
      marca: form.marca.trim(),
      modello: form.modello.trim(),
      anno: form.anno.trim(),
      targa: form.targa.trim(),
      colore: form.colore.trim(),
    };
    setVehicles((prev) => [...prev, newVehicle]);
    setForm({ marca: "", modello: "", anno: "", targa: "", colore: "" });
  };

  const handleRemove = (id: string) => {
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  };

  return (
    <>
      {/* Tasto centrale grande */}
      <button
        onClick={() => setIsOpen(true)}
        className="group relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-green-500/20 ring-4 ring-green-500/40 transition-all duration-300 hover:scale-110 hover:bg-green-500/30 hover:ring-green-500/60 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] sm:h-28 sm:w-28 md:h-32 md:w-32"
        aria-label="Apri elenco autovetture"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-600/20 opacity-0 transition-opacity group-hover:opacity-100" />
        <svg
          className="relative h-10 w-10 text-green-400 sm:h-12 sm:w-12 md:h-14 md:w-14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 01-1-1V5a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1zm1-9a1 1 0 01-1-1V5a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2z"
          />
        </svg>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--card)] px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-green-500/30">
          Elenco auto
        </span>
      </button>

      {/* Modale */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl shadow-green-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Elenco autovetture
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-[var(--muted)] transition-colors hover:bg-[var(--border)] hover:text-[var(--foreground)]"
                aria-label="Chiudi"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col overflow-hidden lg:flex-row">
              {/* Form aggiungi */}
              <form
                onSubmit={handleSubmit}
                className="shrink-0 space-y-3 border-b border-[var(--border)] p-6 lg:w-72 lg:border-b-0 lg:border-r"
              >
                <h3 className="text-sm font-medium text-[var(--muted)]">
                  Aggiungi autovettura
                </h3>
                <input
                  type="text"
                  placeholder="Marca *"
                  value={form.marca}
                  onChange={(e) => setForm((f) => ({ ...f, marca: e.target.value }))}
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50"
                  required
                />
                <input
                  type="text"
                  placeholder="Modello"
                  value={form.modello}
                  onChange={(e) => setForm((f) => ({ ...f, modello: e.target.value }))}
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50"
                />
                <input
                  type="text"
                  placeholder="Anno"
                  value={form.anno}
                  onChange={(e) => setForm((f) => ({ ...f, anno: e.target.value }))}
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50"
                />
                <input
                  type="text"
                  placeholder="Targa"
                  value={form.targa}
                  onChange={(e) => setForm((f) => ({ ...f, targa: e.target.value }))}
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50"
                />
                <input
                  type="text"
                  placeholder="Colore"
                  value={form.colore}
                  onChange={(e) => setForm((f) => ({ ...f, colore: e.target.value }))}
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-500 px-4 py-2.5 text-sm font-medium text-[var(--background)] transition-colors hover:bg-green-400"
                >
                  Aggiungi
                </button>
              </form>

              {/* Tabella */}
              <div className="flex-1 overflow-auto">
                <div className="min-h-[200px] p-4">
                  {vehicles.length === 0 ? (
                    <div className="flex h-48 flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--border)] text-center text-[var(--muted)]">
                      <svg
                        className="mb-2 h-12 w-12 opacity-50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 01-1-1V5a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1zm1-9a1 1 0 01-1-1V5a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2z" />
                      </svg>
                      <p className="text-sm">Nessuna autovettura inserita</p>
                      <p className="mt-1 text-xs">Aggiungi la prima dal form a sinistra</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-[var(--border)] bg-[var(--background)]/50">
                            <th className="px-4 py-3 font-medium text-[var(--muted)]">Marca</th>
                            <th className="px-4 py-3 font-medium text-[var(--muted)]">Modello</th>
                            <th className="px-4 py-3 font-medium text-[var(--muted)]">Anno</th>
                            <th className="px-4 py-3 font-medium text-[var(--muted)]">Targa</th>
                            <th className="px-4 py-3 font-medium text-[var(--muted)]">Colore</th>
                            <th className="w-10 px-2 py-3" />
                          </tr>
                        </thead>
                        <tbody>
                          {vehicles.map((v) => (
                            <tr
                              key={v.id}
                              className="border-b border-[var(--border)]/50 transition-colors hover:bg-[var(--background)]/30 last:border-0"
                            >
                              <td className="px-4 py-3 font-medium">{v.marca}</td>
                              <td className="px-4 py-3">{v.modello || "—"}</td>
                              <td className="px-4 py-3">{v.anno || "—"}</td>
                              <td className="px-4 py-3 font-mono text-xs">{v.targa || "—"}</td>
                              <td className="px-4 py-3">{v.colore || "—"}</td>
                              <td className="px-2 py-3">
                                <button
                                  type="button"
                                  onClick={() => handleRemove(v.id)}
                                  className="rounded p-1.5 text-[var(--muted)] transition-colors hover:bg-red-500/20 hover:text-red-400"
                                  aria-label="Rimuovi"
                                >
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
