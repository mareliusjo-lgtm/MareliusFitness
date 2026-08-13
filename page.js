"use client";

import { useEffect, useState } from "react";

const slides = [
  { label: "Bilde 01", title: "Trening som passer livet ditt", src: "/images/coaching-01.jpg", position: "center 38%" },
  { label: "Bilde 02", title: "Resultater bygget over tid", src: "/images/coaching-04.jpg", position: "85% center" },
  { label: "Bilde 03", title: "Sterkere, steg for steg", src: "/images/coaching-03.jpg", position: "center 34%" },
  { label: "Bilde 04", title: "Tydelig plan. Jevn fremgang.", src: "/images/coaching-02.jpg", position: "center 28%" },
];

const services = [
  { number: "01", title: "Personlig oppfølging", text: "Coaching tilpasset målene dine, utgangspunktet ditt og hverdagen du faktisk lever." },
  { number: "02", title: "Strukturert treningsplan", text: "Et tydelig opplegg som gjør det enkelt å vite hva du skal gjøre – og hvorfor." },
  { number: "03", title: "Varige resultater", text: "Fokus på gode vaner, mestring og progresjon du kan ta med deg videre." },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 4800);
    return () => clearInterval(timer);
  }, []);

  function submitReview(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Ny anmeldelse fra ${data.get("name")}`);
    const body = encodeURIComponent(`Navn: ${data.get("name")}\nVurdering: ${data.get("rating")} av 5\n\n${data.get("review")}`);
    window.location.href = `mailto:mareliusfitness@proton.me?subject=${subject}&body=${body}`;
  }

  return (
    <main id="top">
      <nav className="nav shell">
        <a className="logo" href="#top" aria-label="Til toppen">
          <span className="logoMark">M</span><span>Marelius Johannessen</span>
        </a>
        <div className="navLinks">
          <a href="#coaching">Coaching</a>
          <a href="#om">Om meg</a>
          <a href="#anmeldelser">Anmeldelser</a>
        </div>
        <a className="navCta" href="#kontakt">Kontakt meg <span>↗</span></a>
      </nav>

      <header className="hero shell">
        <div className="heroCopy">
          <p className="kicker"><span /> Personlig treningscoaching</p>
          <h1>Finn styrken.<br /><em>Bygg vanene.</em></h1>
          <p className="lead">Jeg hjelper deg med å skape en sterkere kropp og en treningshverdag som varer – med et opplegg bygget rundt deg.</p>
          <div className="heroActions">
            <a className="button primary" href="#kontakt">Start reisen <span>→</span></a>
            <a className="textLink" href="#coaching">Se hvordan jeg jobber <span>↓</span></a>
          </div>
        </div>

        <div className="carousel" aria-label="Bildekarusell">
          {slides.map((slide, index) => (
            <div className={`slide ${index === activeSlide ? "active" : ""}`} key={slide.label}>
              <img className="slideImage" src={slide.src} alt="Marelius viser treningsfremgang" style={{ objectPosition: slide.position }} />
              <div className="slideShade" />
              <div className="slideCaption"><small>{slide.label}</small><strong>{slide.title}</strong></div>
            </div>
          ))}
          <div className="carouselControls">
            <button aria-label="Forrige bilde" onClick={() => setActiveSlide((activeSlide - 1 + slides.length) % slides.length)}>←</button>
            <div>{slides.map((_, index) => <button className={`dot ${index === activeSlide ? "selected" : ""}`} aria-label={`Vis bilde ${index + 1}`} onClick={() => setActiveSlide(index)} key={index} />)}</div>
            <button aria-label="Neste bilde" onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}>→</button>
          </div>
        </div>
      </header>

      <section className="statement" id="coaching">
        <div className="shell statementInner">
          <p className="sectionLabel">Coaching med retning</p>
          <h2>Ingen snarveier.<br />Bare en plan som <em>fungerer.</em></h2>
          <p className="statementText">Du trenger ikke å være i toppform for å starte. Du trenger bare et tydelig neste steg og noen som følger deg opp.</p>
        </div>
      </section>

      <section className="services shell">
        {services.map((service) => (
          <article className="service" key={service.number}>
            <span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p>
          </article>
        ))}
      </section>

      <section className="about" id="om">
        <div className="shell aboutGrid">
          <div className="portraitFrame">
            <img src="/images/marelius-portrett.jpg" alt="Marelius Johannessen på treningssenteret" />
          </div>
          <div className="aboutCopy">
            <p className="sectionLabel">Din coach</p>
            <h2>Hei, jeg er<br />Marelius.</h2>
            <p>Jeg tilbyr treningscoaching for deg som ønsker bedre struktur, trygg oppfølging og et opplegg som er realistisk å gjennomføre.</p>
            <p>Vi tar utgangspunkt i hvor du er nå, setter en tydelig retning og bygger fremgang gjennom handling – én økt og én vane om gangen.</p>
            <a className="button dark" href="#kontakt">Ta kontakt <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="reviews shell" id="anmeldelser">
        <div className="reviewsIntro">
          <p className="sectionLabel">Erfaringer</p>
          <h2>Hva kundene<br />mine sier.</h2>
          <p>Har du blitt fulgt opp av meg? Jeg setter stor pris på om du deler opplevelsen din.</p>
        </div>
        <form className="reviewForm" onSubmit={submitReview}>
          <div className="formTop"><h3>Legg igjen en anmeldelse</h3><span>✦</span></div>
          <label>Navn<input name="name" type="text" placeholder="Ditt navn" required /></label>
          <label>Vurdering<select name="rating" defaultValue="5"><option value="5">★★★★★ — 5 av 5</option><option value="4">★★★★☆ — 4 av 5</option><option value="3">★★★☆☆ — 3 av 5</option><option value="2">★★☆☆☆ — 2 av 5</option><option value="1">★☆☆☆☆ — 1 av 5</option></select></label>
          <label>Din erfaring<textarea name="review" placeholder="Fortell kort om opplevelsen din..." rows="5" required /></label>
          <button className="button primary" type="submit">Send anmeldelse <span>→</span></button>
          <small>Skjemaet åpner e-postprogrammet ditt. Anmeldelsen publiseres etter godkjenning.</small>
        </form>
      </section>

      <section className="contact" id="kontakt">
        <div className="shell contactInner">
          <p className="sectionLabel light">Klar for å starte?</p>
          <h2>La oss ta den<br />første praten.</h2>
          <p>Fortell meg litt om målene dine, så finner vi ut om coaching passer for deg.</p>
          <div className="contactLinks">
            <a href="mailto:mareliusfitness@proton.me"><small>E-post</small><strong>mareliusfitness@proton.me</strong><span>↗</span></a>
            <a href="tel:+4748347102"><small>Telefon</small><strong>48 34 71 02</strong><span>↗</span></a>
          </div>
        </div>
      </section>

      <footer><div className="shell footerInner"><div className="logo"><span className="logoMark">M</span><span>Marelius Johannessen Coach</span></div><p>© {new Date().getFullYear()} · Treningscoaching med retning.</p><a href="#top">Til toppen ↑</a></div></footer>
    </main>
  );
}
