"use client";

import { useMemo, useState } from "react";

type Episode = { id: string; title: string; category: string; summary: string; meta: string; transcript: string };
const EPISODES: Episode[] = [
  { id: "001", title: "Shipping in public", category: "Show", summary: "Why honest demos matter.", meta: "32 MIN / 18 AUG 2026", transcript: "A conversation about showing the boundary as part of the product: what works now, what is authored, and what is still a promise." },
  { id: "002", title: "Guest: platform eng", category: "Interview", summary: "IDP lessons.", meta: "48 MIN / 04 AUG 2026", transcript: "A field note on internal platforms, the contracts that keep them useful, and the small signals that tell you when a system is too much." },
  { id: "003", title: "The cost of another tab", category: "Tech", summary: "Attention as interface material.", meta: "21 MIN / 22 JUL 2026", transcript: "A quiet technical essay about defaults, retrieval, and building an index that makes the next choice lighter." },
];
const CATEGORIES = ["All", "Show", "Interview", "Tech"] as const;

function SignalWave() {
  return <svg className="signal-wave" viewBox="0 0 620 160" aria-hidden="true"><path d="M0 87h28l11-24 13 54 15-98 15 112 15-53 15 18 15-9 15 10 15-28 15 48 15-74 15 96 15-44 15 16 15-12 15 6 15-34 15 61 15-91 15 119 15-59 15 31 15-17 15 8 15-38 15 63 15-78 15 99 15-43 15 17 15-12 15 8 15-30 15 48 15-75 15 102 15-45 15 23 15-11 15 5 15-28 15 48 15-72 15 90 15-42 15 16 15-11 15 7 15-25 15 39 15-48 15 62 28 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" /></svg>;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [selectedId, setSelectedId] = useState(EPISODES[0].id);
  const visible = useMemo(() => EPISODES.filter((episode) => (category === "All" || episode.category === category) && `${episode.title} ${episode.summary} ${episode.category}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const selected = EPISODES.find((episode) => episode.id === selectedId) ?? visible[0] ?? EPISODES[0];

  return (
    <main className="broadcast-shell">
      <div className="broadcast-frame">
        <header className="broadcast-topbar">
          <a href="https://bookchaowalit.com" className="broadcast-mark" aria-label="Bookchaowalit home"><span>ON</span> / AIR</a>
          <span>EPISODE NOTEBOOK</span>
          <span>{EPISODES.length} EPISODES / CATALOG ONLY</span>
        </header>

        <section className="broadcast-intro">
          <div>
            <h1>Find the voice<br /><em>behind the idea.</em></h1>
            <p>An episode index for conversations about building, attention, and the systems that stay useful after the microphone is off.</p>
          </div>
          <div className="on-air-card" aria-hidden="true"><span>ON AIR</span><b>03</b><small>EPISODES<br />LOGGED</small></div>
        </section>

        <section className="broadcast-desk" aria-label="Podcast episode catalog">
          <aside className="episode-rail">
            <div className="rail-head"><span>EPISODE RAIL</span><span>{visible.length} FOUND</span></div>
            <label className="episode-search"><span aria-hidden="true">⌕</span><span className="sr-only">Search episodes</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search voices or topics" /></label>
            <div className="category-tabs" role="tablist" aria-label="Filter episodes">
              {CATEGORIES.map((item) => <button type="button" role="tab" aria-selected={category === item} className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>)}
            </div>
            <div className="episode-list">
              {visible.length ? visible.map((episode) => <button type="button" key={episode.id} className={`episode-row${selected.id === episode.id ? " selected" : ""}`} onClick={() => setSelectedId(episode.id)} aria-pressed={selected.id === episode.id}><span className="episode-number">{episode.id}</span><span className="episode-copy"><strong>{episode.title}</strong><small>{episode.summary}</small><em>{episode.meta}</em></span><span className="episode-mark" aria-hidden="true" /></button>) : <p className="empty-episodes">No episode matches this signal.</p>}
            </div>
          </aside>

          <article className="episode-card">
            <div className="card-head"><span>SELECTED TRANSMISSION / {selected.category.toUpperCase()}</span><span>READING CARD</span></div>
            <div className="wave-stage"><SignalWave /><div className="wave-scan" aria-hidden="true" /></div>
            <p className="episode-code">EPISODE {selected.id} / {selected.meta}</p>
            <h2>{selected.title}</h2>
            <p className="episode-summary">{selected.summary}</p>
            <div className="episode-note"><span>FIELD NOTE</span><p>{selected.transcript}</p></div>
            <div className="broadcast-honesty"><b>CATALOG ONLY</b> / No audio stream, subscription, or remote feed is attached to this demo.</div>
          </article>
        </section>

        <footer className="broadcast-footer"><span>BOOK / DEV TOOLS</span><span>SEARCH · FILTER · READ</span></footer>
      </div>
    </main>
  );
}
