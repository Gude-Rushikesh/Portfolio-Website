import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PROJECTS } from "../data/projects";
import "./ProjectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const idx = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[idx];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  // Scroll to top on project change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const [currentImage, setCurrentImage] = useState(0);

  // 404 fallback
  if (!project) {
    return (
      <div className="proj-not-found">
        <h1>Project not found</h1>
        <Link to="/">← Back to home</Link>
      </div>
    );
  }

  const p = PROJECTS.find((p) => p.id === id);
  

  return (
    <div className="proj-page">
      {/* ── HERO ── */}
      <header className="proj-hero">
        <div className="proj-hero-meta">
          <span className="proj-tag">{p.num}</span>
          <span className="proj-tag">{p.tag}</span>
          {p.chips.map((c) => (
            <span key={c} className="proj-tag proj-tag--muted">
              {c}
            </span>
          ))}
        </div>

        <h1
          dangerouslySetInnerHTML={{
            __html: p.title.replace(p.titleItalic, `<em>${p.titleItalic}</em>`),
          }}
        />

        <p className="proj-sub">{p.subtitle}</p>

        <div className="proj-meta-section">
          <div className="proj-meta-row">
            <div className="proj-meta-item">
              <span>Role</span>
              <span>{p.role}</span>
            </div>

            <div className="proj-meta-item">
              <span>Duration</span>
              <span>{p.duration}</span>
            </div>

            <div className="proj-meta-item">
              <span>Year</span>
              <span>{p.year}</span>
            </div>
          </div>

          <div className="proj-live-link">
            <span>Website</span>
            <a href={p.liveUrl} target="_blank" rel="noreferrer">
              Visit Live Site →
            </a>
          </div>
        </div>

        <div className="proj-links">
          {p.liveUrl && p.liveUrl !== "#" && (
            <a
              className="btn-primary"
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live site
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          )}
          {p.githubUrl && p.githubUrl !== "#" && (
            <a
              className="btn-ghost"
              href={p.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </a>
          )}
        </div>
      </header>

      {/* ── THUMBNAIL / COVER ── */}
      {/* Replace this div with an <img> of your project screenshot */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() =>
            setCurrentImage(
              (currentImage - 1 + p.gallery.length) % p.gallery.length,
            )
          }
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "48px",
            height: "48px",
            borderRadius: "999px",
            border: "1px solid #2a2a28",
            background: "#131312",
            color: "#f2ede6",
            cursor: "pointer",
          }}
        >
          ←
        </button>

        <img
          src={p.gallery[currentImage]}
          alt={p.title}
          className="proj-thumb-img"
        />

        <button
          onClick={() => setCurrentImage((currentImage + 1) % p.gallery.length)}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "48px",
            height: "48px",
            borderRadius: "999px",
            border: "1px solid #2a2a28",
            background: "#131312",
            color: "#f2ede6",
            cursor: "pointer",
          }}
        >
          →
        </button>
      </div>

      {/* ── CONTENT ── */}
      <div className="proj-content">
        <section className="proj-section">
          <p className="proj-section-label">Overview</p>
          <div className="proj-section-body">
            <h2>The goal</h2>
            <p>{p.overview}</p>
          </div>
        </section>

        <section className="proj-section">
          <p className="proj-section-label">Process</p>
          <div className="proj-section-body">
            <h2>How I approached it</h2>
            <p>{p.process}</p>
          </div>
        </section>

        <section className="proj-section">
          <p className="proj-section-label">Features</p>
          <div className="proj-section-body">
            <h2>Key highlights</h2>
            <div className="feat-grid">
              {p.features.map((f) => (
                <div key={f.title} className="feat-item">
                  <div className="feat-icon" aria-hidden>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d={f.icon} />
                    </svg>
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="proj-section">
          <p className="proj-section-label">Challenges</p>
          <div className="proj-section-body">
            <h2>Problems solved</h2>
            <div className="challenge-grid">
              {p.challenges.map((c) => (
                <div key={c.title} className="challenge-item">
                  <div className="challenge-dot" aria-hidden />
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="proj-section proj-section--last">
          <p className="proj-section-label">Outcome</p>
          <div className="proj-section-body">
            <h2>Result</h2>
            <p>{p.outcome}</p>
          </div>
        </section>
      </div>

      {/* ── PROJECT NAV ── */}
      <nav className="proj-nav" aria-label="Project navigation">
        <button
          className="proj-nav-item"
          onClick={() => navigate(`/projects/${prev.id}`)}
        >
          <span className="proj-nav-label">← Previous</span>
          <span className="proj-nav-title">{prev.title}</span>
        </button>
        <button
          className="proj-nav-item proj-nav-item--right"
          onClick={() => navigate(`/projects/${next.id}`)}
        >
          <span className="proj-nav-label">Next →</span>
          <span className="proj-nav-title">{next.title}</span>
        </button>
      </nav>

      <footer className="proj-footer">
        <p>© {new Date().getFullYear()} Rushikesh</p>
        <Link to="/">← Back to all projects</Link>
      </footer>
    </div>
  );
}
