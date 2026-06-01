import { useNavigate } from 'react-router-dom';
import { PROJECTS, SKILLS } from '../data/projects';
import './HomePage.css';

/* ── tiny inline SVG helpers ── */
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
function ArrowDiag() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-glow" aria-hidden />
        <div className="hero-inner">
          <p className="hero-eyebrow fade-up">
            AI-DS Graduate &amp; MERN Developer
          </p>
          <h1 className="fade-up delay-1">
            I turn data
            <br />
            into <em>decisions</em>
            <br />
            and products.
          </h1>
          <p className="hero-sub fade-up delay-2">
            Hi, I'm Rushikesh. I'm a B.Tech AI &amp; Data Science graduate who
            finds patterns in data and builds full-stack apps to bring those
            insights to life.
          </p>
          <div className="hero-ctas fade-up delay-3">
            <a
              className="btn-primary"
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View my work <ArrowRight />
            </a>
            <a
              className="btn-ghost"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in touch
            </a>
          </div>
        </div>
        <p className="hero-scroll" aria-hidden>
          Scroll
        </p>
      </section>

      {/* ── WORK ── */}
      <div className="work-strip" id="work">
        <div className="section">
          <span className="section-label">Selected work</span>
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="project-card"
                onClick={() => navigate(`/projects/${p.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && navigate(`/projects/${p.id}`)
                }
                aria-label={`View ${p.title} case study`}
              >
                {/* <div className="card-thumb" style={{ background: p.color }}>
                  <span className="card-thumb-num" aria-hidden>{p.num}</span>
                </div> */}

                <div className="card-thumb">
                  <img
                    src={p.gallery?.[0]}
                    alt={p.title}
                    className="card-thumb-img"
                  />

                  <div className="card-thumb-overlay" />

                  <span className="card-thumb-num" aria-hidden>
                    {p.num}
                  </span>
                </div>

                <div className="card-body">
                  <p className="card-tag">{p.tag}</p>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-desc">{p.desc}</p>
                  <div className="card-chips">
                    {p.chips.map((c) => (
                      <span key={c} className="chip">
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="card-footer">
                    <span className="view-label">View case study</span>
                    <div className="card-arrow" aria-hidden>
                      <ArrowDiag />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ── SKILLS ── */}
      <div id="skills">
        <div className="section">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">What I work with</h2>
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <div key={s.name} className="skill-item">
                <p className="skill-name">{s.name}</p>
                <p className="skill-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <div className="about-strip" id="about">
        <div className="section">
          <div className="about-grid">
            {/* Photo placeholder — replace <div> with <img src="..." alt="Rushikesh" /> */}
            <div className="about-img" aria-label="Profile photo placeholder">
              <div className="about-img-placeholder">
                <span className="about-initials">R</span>
                <span>Your photo here</span>
              </div>
            </div>
            <div className="about-text">
              <span className="section-label">About me</span>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>
                B.Tech AI &amp; Data Science — building at the intersection of
                data and product.
              </h2>
              <p>
                I graduated in 2025 with a degree in Artificial Intelligence
                &amp; Data Science. After that I completed a full MERN stack
                course, which means I can take a model from a Jupyter notebook
                all the way to a deployed web app.
              </p>
              <p>
                I'm looking for a Junior Data Scientist role where I can work on
                real problems — cleaning messy data, building models, and
                communicating findings clearly. The MERN background means I
                don't just hand off results; I can ship them too.
              </p>
              <div className="stat-row">
                <div className="stat">
                  <span className="stat-num">AI/DS</span>
                  <span className="stat-label">B.Tech degree</span>
                </div>
                <div className="stat">
                  <span className="stat-num">MERN</span>
                  <span className="stat-label">Full-stack certified</span>
                </div>
                <div className="stat">
                  <span className="stat-num">2025</span>
                  <span className="stat-label">Graduate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <div className="contact-strip" id="contact">
        <div className="contact-inner">
          <div>
            <span className="section-label">Contact</span>
            <h2 className="section-title" style={{ marginBottom: "16px" }}>
              Let's build something together.
            </h2>
            <p className="contact-sub">
              Actively looking for Junior Data Scientist, ML, or AI Engineer
              roles. Also open to MERN freelance work. Drop a message — I reply
              within a day.
            </p>
          </div>
          <div className="contact-links">
            <ContactLink href="mailto:rushikeshrdj23@gmail.com" icon="email">
              rushikeshrdj23@gmail.com
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/rushikesh-pandurang-gude/"
              target="_blank"
              icon="linkedin"
            >
              LinkedIn
            </ContactLink>
            <ContactLink
              href="https://github.com/Gude-Rushikesh"
              target="_blank"
              icon="github"
            >
              GitHub
            </ContactLink>
            {/* <ContactLink 
            href="/Rushikesh_Gude-Resume.pdf" 
            download="Rushikesh_Gude-Resume.pdf"
            icon="file"
            target="_blank">
              Download Resume
            </ContactLink> */}
            <a
              className="contact-link"
              href="/Rushikesh_Gude_Resume.pdf"
              // download="Rushikesh-Gude_Resume.pdf"
              rel="noopener noreferrer"
              // target="_blank"
              icon="file"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <footer className="home-footer">
        <p>
          © {new Date().getFullYear()} Rushikesh. Designed &amp; built with
          care.
        </p>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

/* ── Contact link sub-component ── */
const ICONS = {
  email: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
  linkedin: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
  github: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
  file: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6',
};

function ContactLink({ href, icon, target, children }) {
  return (
    <a
      className="contact-link"
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
    >
      <span className="contact-link-left">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          {ICONS[icon].split(' M').map((d, i) => (
            <path key={i} d={i === 0 ? d : 'M' + d} />
          ))}
        </svg>
        {children}
      </span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M7 17L17 7M7 7h10v10" />
      </svg>
    </a>
  );
}
