import React, { useEffect, useMemo, useState } from "react";
export default function App() {
  const isMobile = window.innerWidth < 768;
  const [lang, setLang] = useState("en");

  const content = useMemo(() => {
    const data = {
      en: {
        topBar: "Fort Worth, Texas • Premium In-Shop Service",
        navServices: "Services",
        navAbout: "About",
        navGallery: "Gallery",
        navContact: "Contact",
        heroKicker: "MASTER PDR",
        heroTitle: "Paintless Dent Repair",
        heroSubtitle: "Removing dents with precision",
        heroText:
          "Professional paintless dent repair in Fort Worth, Texas. We remove dents without repainting and preserve your vehicle’s original finish.",
        btnQuote: "GET FREE ESTIMATE",
        btnCall: "CALL NOW",
        trust1: "Same Day Service",
        trust2: "In-Shop Service",
        trust3: "Original Paint Preserved",
        trust4: "Free Estimate",

        aboutKicker: "ABOUT MASTER PDR",
        aboutTitle: "Professional dent repair with premium results",
        aboutText:
          "Master PDR specializes in Paintless Dent Repair for door dings, hail damage, bodyline dents and larger damage when the original paint is still intact. Our focus is simple: clean results, fast turnaround and a professional customer experience.",
        aboutText2:
          "We work with attention to detail, professional tools and a quality-first process to deliver clean repairs with a premium finish. Our goal is to restore your vehicle with precision and care from the first estimate to the final result.",
        aboutHighlight1: "Premium finish",
        aboutHighlight2: "Professional tools",
        aboutHighlight3: "Detail-focused work",
        aboutHighlight4: "Fast turnaround",
        aboutVideo1: "Hail Damage Inspection",
        aboutVideo2: "Repair Process",

        servicesKicker: "OUR SERVICES",
        servicesTitle: "What we do",
        services: [
          {
            title: "Door Dings",
            text: "Fast repair for parking lot dents and everyday damage.",
          },
          {
            title: "Hail Damage Repair",
            text: "Professional correction for hail damage with precise finishing.",
          },
          {
            title: "Large Dents",
            text: "Advanced techniques for larger dents without repainting.",
          },
          {
            title: "Bodyline Repair",
            text: "Detailed work on sharp lines and harder damage areas.",
          },
        ],

        galleryKicker: "REAL WORK",
        galleryTitle: "Before and after results",
        galleryText:
          "Show real work to build trust. Customers want to see the damage and the clean final result.",
        beforeLabel: "BEFORE",
        afterLabel: "AFTER",

        whyKicker: "WHY CHOOSE US",
        whyTitle: "Built for customers who want quality",
        whyItems: [
          "No paint required",
          "In-shop service",
          "Fast turnaround",
          "Attention to detail",
          "Professional tools",
          "Free estimate",
        ],

        contactKicker: "CONTACT",
        contactTitle: "Ready to restore your vehicle?",
        contactText:
          "Call, text or message us on WhatsApp for a fast free estimate.",
        footer: "MASTER PDR • Paintless Dent Repair in Fort Worth, Texas",
      },

      pt: {
        topBar: "Fort Worth, Texas • Atendimento Premium na Loja",
        navServices: "Serviços",
        navAbout: "Sobre",
        navGallery: "Galeria",
        navContact: "Contato",
        heroKicker: "MASTER PDR",
        heroTitle: "Martelinho de Ouro",
        heroSubtitle: "Removendo amassados com precisão",
        heroText:
          "Serviço profissional de martelinho de ouro em Fort Worth, Texas. Removemos amassados sem repintura e preservamos a pintura original do veículo.",
        btnQuote: "PEDIR ORÇAMENTO",
        btnCall: "LIGAR AGORA",
        trust1: "Serviço no mesmo dia",
        trust2: "Atendimento na loja",
        trust3: "Pintura original preservada",
        trust4: "Orçamento grátis",

        aboutKicker: "SOBRE A MASTER PDR",
        aboutTitle: "Reparo profissional com resultado premium",
        aboutText:
          "A Master PDR é especializada em martelinho de ouro para amassados de porta, granizo, vincos e danos maiores quando a pintura original continua intacta. Nosso foco é simples: resultado limpo, rapidez e experiência profissional para o cliente.",
        aboutText2:
          "Trabalhamos com atenção aos detalhes, ferramentas profissionais e um processo focado em qualidade para entregar reparos limpos com acabamento premium. Nosso objetivo é restaurar seu veículo com precisão e cuidado do primeiro orçamento ao resultado final.",
        aboutHighlight1: "Acabamento premium",
        aboutHighlight2: "Ferramentas profissionais",
        aboutHighlight3: "Trabalho detalhista",
        aboutHighlight4: "Entrega rápida",
        aboutVideo1: "Vídeo da Oficina 1",
        aboutVideo2: "Vídeo da Oficina 2",

        servicesKicker: "NOSSOS SERVIÇOS",
        servicesTitle: "O que fazemos",
        services: [
          {
            title: "Amassados de Porta",
            text: "Reparo rápido para danos do dia a dia e estacionamentos.",
          },
          {
            title: "Danos de Granizo",
            text: "Correção profissional de granizo com acabamento preciso.",
          },
          {
            title: "Amassados Maiores",
            text: "Técnicas avançadas para amassados maiores sem pintura.",
          },
          {
            title: "Reparo de Linha",
            text: "Trabalho detalhado em vincos e linhas de carroceria.",
          },
        ],

        galleryKicker: "TRABALHOS REAIS",
        galleryTitle: "Resultados de antes e depois",
        galleryText:
          "Use fotos reais para gerar confiança. O cliente quer ver o dano e o resultado final limpo.",
        beforeLabel: "ANTES",
        afterLabel: "DEPOIS",

        whyKicker: "POR QUE NOS ESCOLHER",
        whyTitle: "Feito para clientes que querem qualidade",
        whyItems: [
          "Sem necessidade de pintura",
          "Atendimento na loja",
          "Serviço rápido",
          "Atenção aos detalhes",
          "Ferramentas profissionais",
          "Orçamento grátis",
        ],

        contactKicker: "CONTATO",
        contactTitle: "Pronto para restaurar seu veículo?",
        contactText:
          "Ligue, mande mensagem ou chame no WhatsApp para um orçamento rápido e grátis.",
        footer: "MASTER PDR • Martelinho de ouro em Fort Worth, Texas",
      },

      es: {
        topBar: "Fort Worth, Texas • Servicio Premium en Taller",
        navServices: "Servicios",
        navAbout: "Sobre Nosotros",
        navGallery: "Galería",
        navContact: "Contacto",
        heroKicker: "MASTER PDR",
        heroTitle: "Reparación Sin Pintura",
        heroSubtitle: "Eliminando abolladuras con precisión",
        heroText:
          "Servicio profesional de reparación de abolladuras en Fort Worth, Texas. Eliminamos golpes sin repintar y preservamos el acabado original del vehículo.",
        btnQuote: "SOLICITAR COTIZACIÓN",
        btnCall: "LLAMAR AHORA",
        trust1: "Servicio el mismo día",
        trust2: "Atención en taller",
        trust3: "Pintura original preservada",
        trust4: "Cotización gratis",

        aboutKicker: "SOBRE MASTER PDR",
        aboutTitle: "Reparación profesional con resultado premium",
        aboutText:
          "Master PDR se especializa en reparación sin pintura para golpes de puerta, granizo, líneas marcadas y daños más grandes cuando la pintura original sigue intacta. Nuestro enfoque es simple: resultado limpio, rapidez y experiencia profesional.",
        aboutText2:
          "Trabajamos con atención al detalle, herramientas profesionales y un proceso enfocado en calidad para ofrecer reparaciones limpias con acabado premium. Nuestro objetivo es restaurar tu vehículo con precisión y cuidado desde la cotización hasta el resultado final.",
        aboutHighlight1: "Acabado premium",
        aboutHighlight2: "Herramientas profesionales",
        aboutHighlight3: "Trabajo detallado",
        aboutHighlight4: "Entrega rápida",
        aboutVideo1: "Video del Taller 1",
        aboutVideo2: "Video del Taller 2",

        servicesKicker: "NUESTROS SERVICIOS",
        servicesTitle: "Qué hacemos",
        services: [
          {
            title: "Golpes de Puerta",
            text: "Reparación rápida para daños comunes de estacionamiento.",
          },
          {
            title: "Daños por Granizo",
            text: "Corrección profesional con acabado preciso.",
          },
          {
            title: "Abolladuras Grandes",
            text: "Técnicas avanzadas para daños mayores sin repintar.",
          },
          {
            title: "Reparación de Líneas",
            text: "Trabajo detallado en pliegues y líneas de carrocería.",
          },
        ],

        galleryKicker: "TRABAJOS REALES",
        galleryTitle: "Resultados de antes y después",
        galleryText:
          "Usa fotos reales para generar confianza. El cliente quiere ver el daño y el resultado final limpio.",
        beforeLabel: "ANTES",
        afterLabel: "DESPUÉS",

        whyKicker: "POR QUÉ ELEGIRNOS",
        whyTitle: "Hecho para clientes que buscan calidad",
        whyItems: [
          "Sin necesidad de pintura",
          "Atención en taller",
          "Trabajo rápido",
          "Atención al detalle",
          "Herramientas profesionales",
          "Cotización gratis",
        ],

        contactKicker: "CONTACTO",
        contactTitle: "¿Listo para restaurar tu vehículo?",
        contactText:
          "Llámanos o escríbenos por WhatsApp para una cotización rápida y gratis.",
        footer: "MASTER PDR • Reparación sin pintura en Fort Worth, Texas",
      },
    };

    return data[lang];
  }, [lang]);

  const phoneDisplay = "+1 (817) 319-4862";
  const phoneLink = "tel:+18173194862";
  const whatsappLink = "https://wa.me/18173194862";
  const email = "servicemastermp7@gmail.com";
  const emailLink = `mailto:${email}`;
  const instagram = "mastermp7_";
  const instagramLink =
    "https://www.instagram.com/mastermp7_?igsh=bG9hZHEyZ2Vodzhh";
  const facebook = "mastermp7";
  const facebookLink =
    "https://www.facebook.com/share/185d1cQ24E/?mibextid=wwXIfr";

  const galleryImages = [
    { before: "/after1.jpg", after: "/before1.jpg" },
    { before: "/after2.jpg", after: "/before2.jpg" },
    { before: "/after3.jpg", after: "/before3.jpg" },
  ];

  const [sliderPosition, setSliderPosition] = useState(
    galleryImages.map(() => 58)
  );
  const [autoAnimate, setAutoAnimate] = useState(true);
  const handleSlider = (index, value) => {
    setAutoAnimate(false);
    const updated = [...sliderPosition];
    updated[index] = Number(value);
    setSliderPosition(updated);
  };
  useEffect(() => {
    if (!autoAnimate) return;

    let direction = 1;
    let value = 50;

    const interval = setInterval(() => {
      value += direction * 1.2;

      if (value >= 58) direction = -1;
      if (value <= 42) direction = 1;

      setSliderPosition(galleryImages.map(() => value));
    }, 80);

    return () => clearInterval(interval);
  }, [autoAnimate, galleryImages]);
  return (
    <div style={styles.page}>
      <TopBar text={content.topBar} phoneDisplay={phoneDisplay} email={email} />

      <Header
        content={content}
        lang={lang}
        setLang={setLang}
        whatsappLink={whatsappLink}
      />

      <Hero
        content={content}
        whatsappLink={whatsappLink}
        phoneLink={phoneLink}
      />

      <About content={content} />

      <Services content={content} />

      <Gallery
        content={content}
        images={galleryImages}
        sliderPosition={sliderPosition}
        handleSlider={handleSlider}
      />

      <WhyChoose content={content} />

      <Contact
        content={content}
        phoneDisplay={phoneDisplay}
        phoneLink={phoneLink}
        whatsappLink={whatsappLink}
        email={email}
        emailLink={emailLink}
        instagram={instagram}
        instagramLink={instagramLink}
        facebook={facebook}
        facebookLink={facebookLink}
      />

      <footer style={styles.footer}>{content.footer}</footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        style={styles.floatingWhats}
      >
        💬
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        style={styles.floatingWhats}
      >
        💬
      </a>
      <style>{`
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: #050505;
  }

  @keyframes dragHint {
    0% {
      transform: translateX(0) scale(1);
    }
    25% {
      transform: translateX(-6px) scale(1.05);
    }
    50% {
      transform: translateX(6px) scale(1.05);
    }
    75% {
      transform: translateX(-4px) scale(1.02);
    }
    100% {
      transform: translateX(0) scale(1);
    }
  }
  @keyframes pulseButton {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 rgba(214,163,39, 0.4);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(214,163,39, 0.6);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 rgba(214,163,39, 0.4);
    }
  }
`}</style>
    </div>
  );
}

function TopBar({ text, phoneDisplay, email }) {
  return (
    <div style={styles.topBar}>
      <div style={styles.containerWide}>
        <div style={styles.topBarInner}>
          <span>{text}</span>
          <div style={styles.topBarRight}>
            <a href="tel:+18173194862" style={styles.topBarLink}>
              {phoneDisplay}
            </a>
            <a href={`mailto:${email}`} style={styles.topBarLink}>
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ content, lang, setLang, whatsappLink }) {
  return (
    <header style={styles.header}>
      <div style={styles.containerWide}>
        <div style={styles.headerInner}>
          <div>
            <div style={styles.brand}>MASTER PDR</div>
            <div style={styles.brandSub}>Paintless Dent Repair</div>
          </div>

          <nav style={styles.nav}>
            <a href="#services" style={styles.navLink}>
              {content.navServices}
            </a>
            <a href="#about" style={styles.navLink}>
              {content.navAbout}
            </a>
            <a href="#gallery" style={styles.navLink}>
              {content.navGallery}
            </a>
            <a href="#contact" style={styles.navLink}>
              {content.navContact}
            </a>
          </nav>

          <div style={styles.langWrap}>
            <LangButton
              label="EN"
              active={lang === "en"}
              onClick={() => setLang("en")}
            />
            <LangButton
              label="PT"
              active={lang === "pt"}
              onClick={() => setLang("pt")}
            />
            <LangButton
              label="ES"
              active={lang === "es"}
              onClick={() => setLang("es")}
            />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={styles.quoteBtnDesktop}
            >
              {content.btnQuote}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ content, whatsappLink, phoneLink }) {
  return (
    <section style={styles.hero}>
      <div style={styles.heroBg} />
      <div style={styles.heroOverlay} />

      <div style={styles.containerWide}>
        <div style={styles.heroContent}>
          <div style={styles.heroLeft}>
            <div style={styles.heroKicker}>{content.heroKicker}</div>
            <h1 style={styles.heroTitle}>{content.heroTitle}</h1>
            <div style={styles.heroSubtitle}>{content.heroSubtitle}</div>
            <p style={styles.heroText}>{content.heroText}</p>

            <div style={styles.heroButtons}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  ...styles.primaryBtn,
                  animation: "pulseButton 2.5s infinite",
                }}
              >
                {content.btnQuote}
              </a>
              <a href={phoneLink} style={styles.secondaryBtn}>
                {content.btnCall}
              </a>
            </div>

            <div style={styles.trustRow}>
              <span style={styles.trustBadge}>{content.trust1}</span>
              <span style={styles.trustBadge}>{content.trust2}</span>
              <span style={styles.trustBadge}>{content.trust3}</span>
              <span style={styles.trustBadge}>{content.trust4}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ content }) {
  return (
    <section id="about" style={styles.sectionDark}>
      <div style={styles.container}>
        <div style={styles.twoColAbout}>
          <div>
            <div style={styles.kicker}>{content.aboutKicker}</div>
            <h2 style={styles.sectionTitle}>{content.aboutTitle}</h2>
            <p style={styles.sectionText}>{content.aboutText}</p>
            <p style={styles.sectionText}>{content.aboutText2}</p>

            <div style={styles.aboutHighlights}>
              <div style={styles.highlightBadge}>
                ✓ {content.aboutHighlight1}
              </div>
              <div style={styles.highlightBadge}>
                ✓ {content.aboutHighlight2}
              </div>
              <div style={styles.highlightBadge}>
                ✓ {content.aboutHighlight3}
              </div>
              <div style={styles.highlightBadge}>
                ✓ {content.aboutHighlight4}
              </div>
            </div>
          </div>

          <div style={styles.aboutRightCol}>
            <div style={styles.aboutCard}>
              <div style={styles.aboutCardTitle}>MASTER PDR</div>
              <div style={styles.aboutCardText}>
                Fort Worth, Texas • Premium Finish • Professional Results
              </div>
            </div>

            <div style={styles.videoGrid}>
              <div style={styles.videoCard}>
                <video
                  controls
                  preload="metadata"
                  poster="/before5.jpg"
                  style={styles.videoFrame}
                >
                  <source src="/about-video1.mp4" type="video/mp4" />
                </video>
                <div style={styles.videoLabel}>{content.aboutVideo1}</div>
              </div>

              <div style={styles.videoCard}>
                <video
                  controls
                  preload="metadata"
                  poster="/before6.jpg"
                  style={styles.videoFrame}
                >
                  <source src="/about-video2.mp4" type="video/mp4" />
                </video>
                <div style={styles.videoLabel}>{content.aboutVideo2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ content }) {
  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.kicker}>{content.servicesKicker}</div>
        <h2 style={styles.sectionTitle}>{content.servicesTitle}</h2>

        <div style={styles.grid4}>
          {content.services.map((service) => (
            <div key={service.title} style={styles.card}>
              <div style={styles.cardIcon}>★</div>
              <div style={styles.cardTitle}>{service.title}</div>
              <div style={styles.cardText}>{service.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ content, images, sliderPosition, handleSlider }) {
  return (
    <section id="gallery" style={styles.sectionDark}>
      <div style={styles.container}>
        <div style={styles.kicker}>{content.galleryKicker}</div>
        <h2 style={styles.sectionTitle}>{content.galleryTitle}</h2>
        <p style={styles.sectionTextNarrow}>{content.galleryText}</p>

        <div style={styles.galleryGrid}>
          {images.map((item, i) => (
            <div key={i} style={styles.galleryCard}>
              <div style={styles.sliderWrap}>
                <img
                  src={item.before}
                  alt={`Before ${i + 1}`}
                  style={styles.sliderBaseImg}
                  loading="lazy"
                />

                <div
                  style={{
                    ...styles.sliderAfterWrap,
                    width: `${sliderPosition[i]}%`,
                  }}
                >
                  <img
                    src={item.after}
                    alt={`After ${i + 1}`}
                    style={styles.sliderOverlayImg}
                    loading="lazy"
                  />
                </div>

                <div
                  style={{
                    ...styles.sliderDivider,
                    left: `${sliderPosition[i]}%`,
                  }}
                >
                  <div style={styles.sliderHandle}>↔</div>
                </div>

                <div style={styles.beforeLabel}>{content.beforeLabel}</div>
                <div style={styles.afterLabel}>{content.afterLabel}</div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition[i]}
                  onChange={(e) => handleSlider(i, e.target.value)}
                  style={styles.sliderInput}
                  aria-label={`Before and after slider ${i + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose({ content }) {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.kicker}>{content.whyKicker}</div>
        <h2 style={styles.sectionTitle}>{content.whyTitle}</h2>

        <div style={styles.grid3}>
          {content.whyItems.map((item) => (
            <div key={item} style={styles.checkCard}>
              ✓ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({
  content,
  phoneDisplay,
  phoneLink,
  whatsappLink,
  email,
  emailLink,
  instagram,
  instagramLink,
  facebook,
  facebookLink,
}) {
  return (
    <section id="contact" style={styles.sectionDark}>
      <div style={styles.container}>
        <div style={styles.twoCol}>
          <div>
            <div style={styles.kicker}>{content.contactKicker}</div>
            <h2 style={styles.sectionTitle}>{content.contactTitle}</h2>
            <p style={styles.sectionText}>{content.contactText}</p>

            <div style={styles.heroButtons}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={styles.primaryBtn}
              >
                WhatsApp
              </a>
              <a href={phoneLink} style={styles.secondaryBtn}>
                {content.btnCall}
              </a>
              <a href={emailLink} style={styles.secondaryBtn}>
                Email
              </a>
            </div>
          </div>

          <div style={styles.contactCard}>
            <InfoRow label="Business" value="MASTER PDR" />
            <InfoRow
              label="Phone / WhatsApp"
              value={phoneDisplay}
              href={phoneLink}
            />
            <InfoRow label="Email" value={email} href={emailLink} />
            <InfoRow
              label="Instagram"
              value={`@${instagram}`}
              href={instagramLink}
              external
            />
            <InfoRow
              label="Facebook"
              value={facebook}
              href={facebookLink}
              external
            />
            <InfoRow label="Location" value="Fort Worth, Texas" noBorder />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value, href, external, noBorder }) {
  return (
    <div
      style={{
        ...styles.infoRow,
        borderBottom: noBorder ? "none" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={styles.infoLabel}>{label}</div>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          style={styles.infoLink}
        >
          {value}
        </a>
      ) : (
        <div style={styles.infoValue}>{value}</div>
      )}
    </div>
  );
}

function LangButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.langBtn,
        background: active ? "#d6a327" : "transparent",
        color: active ? "#111" : "#fff",
      }}
    >
      {label}
    </button>
  );
}

const styles = {
  page: {
    margin: 0,
    background: "#050505",
    color: "#fff",
    fontFamily: "Arial, sans-serif",

    width: "100%",
    maxWidth: "100vw",
    overflowX: "hidden",
    position: "relative",
  },

  containerWide: {
    width: "100%",
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 16px",
    boxSizing: "border-box",
  },

  container: {
    maxWidth: 1160,
    margin: "0 auto",
    padding: "0 24px",
  },

  topBar: {
    background: "#0b0b0b",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    color: "#cfcfcf",
    fontSize: 13,
  },

  topBarInner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    padding: "10px 0",
    flexWrap: "wrap",
  },

  topBarRight: {
    display: "flex",
    gap: 18,
    flexWrap: "wrap",
  },

  topBarLink: {
    color: "#cfcfcf",
    textDecoration: "none",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(8,8,8,0.88)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  headerInner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    flexWrap: "wrap",
    padding: "18px 0",
  },

  brand: {
    fontSize: 34,
    fontWeight: 900,
    color: "#f1d067",
    lineHeight: 1,
  },

  brandSub: {
    color: "#c7c7c7",
    fontSize: 13,
    marginTop: 4,
  },

  nav: {
    display: "flex",
    gap: 22,
    flexWrap: "wrap",
  },

  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
  },

  langWrap: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
  },

  langBtn: {
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 10,
    padding: "8px 10px",
    cursor: "pointer",
    fontWeight: 700,
  },

  quoteBtnDesktop: {
    marginLeft: 8,
    textDecoration: "none",
    background: "linear-gradient(135deg, #f2cf64, #d6a327)",
    color: "#111",
    padding: "11px 16px",
    borderRadius: 12,
    fontWeight: 800,
  },

  hero: {
    position: "relative",
    minHeight: "86vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },

  heroBg: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url('/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "top center",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 46%, rgba(0,0,0,0.78) 100%)",
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    minHeight: "86vh",
  },

  heroLeft: {
    maxWidth: 760,
  },

  heroKicker: {
    color: "#f2cf64",
    fontWeight: 800,
    marginBottom: 14,
    letterSpacing: 1,
  },

  heroTitle: {
    fontSize: "clamp(44px, 8vw, 92px)",
    lineHeight: 0.95,
    margin: "0 0 12px",
    color: "#f4d56c",
    textTransform: "uppercase",
    fontWeight: 900,
  },

  heroSubtitle: {
    fontSize: "clamp(24px, 3vw, 38px)",
    fontWeight: 800,
    marginBottom: 16,
  },

  heroText: {
    maxWidth: 720,
    color: "#d4d4d4",
    fontSize: 18,
    lineHeight: 1.8,
    marginBottom: 26,
  },

  heroButtons: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    marginBottom: 22,
  },

  primaryBtn: {
    textDecoration: "none",
    background: "linear-gradient(135deg, #f2cf64, #d6a327)",
    color: "#111",
    padding: "15px 24px",
    borderRadius: 12,
    fontWeight: 900,
    boxShadow: "0 10px 24px rgba(214,163,39,0.25)",
  },

  secondaryBtn: {
    textDecoration: "none",
    background: "transparent",
    color: "#fff",
    padding: "15px 24px",
    borderRadius: 12,
    fontWeight: 900,
    border: "1px solid rgba(255,255,255,0.18)",
  },

  trustRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },

  trustBadge: {
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 999,
    padding: "9px 14px",
    color: "#d9d9d9",
    fontSize: 14,
  },

  section: {
    padding: "84px 0",
    background: "#070707",
  },

  sectionDark: {
    padding: "84px 0",
    background: "#101010",
  },

  kicker: {
    color: "#f2cf64",
    fontWeight: 800,
    marginBottom: 10,
    letterSpacing: 1,
  },

  sectionTitle: {
    fontSize: "clamp(30px, 5vw, 52px)",
    lineHeight: 1.05,
    margin: "0 0 16px",
  },

  sectionText: {
    color: "#cfcfcf",
    lineHeight: 1.9,
    fontSize: 17,
    marginBottom: 16,
  },

  sectionTextNarrow: {
    color: "#cfcfcf",
    lineHeight: 1.9,
    fontSize: 17,
    maxWidth: 760,
    marginBottom: 28,
  },

  twoCol: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 28,
    alignItems: "center",
  },

  twoColAbout: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 20,
    alignItems: "center",
  },

  aboutRightCol: {
    display: "grid",
    gap: 18,
  },

  aboutCard: {
    background: "#171717",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 22,
    padding: 28,
    minHeight: 140,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  aboutCardTitle: {
    fontSize: 28,
    fontWeight: 900,
    color: "#f2cf64",
    marginBottom: 8,
  },

  aboutCardText: {
    color: "#d3d3d3",
    lineHeight: 1.8,
  },

  aboutHighlights: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 12,
  },

  highlightBadge: {
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 999,
    padding: "10px 14px",
    color: "#d9d9d9",
    fontSize: 14,
    background: "#151515",
  },

  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 18,
  },

  videoCard: {
    background: "#171717",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 20,
    padding: 14,
  },

  videoFrame: {
    width: "100%",
    height: 400,
    borderRadius: 14,
    background: "#000",
    objectFit: "cover",
  },

  videoLabel: {
    marginTop: 10,
    fontWeight: 700,
    color: "#d6d6d6",
  },

  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 18,
  },

  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
  },

  card: {
    background: "#171717",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 20,
    padding: 22,
  },

  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    background: "rgba(214,163,39,0.15)",
    color: "#f2cf64",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    marginBottom: 16,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 800,
    marginBottom: 10,
  },

  cardText: {
    color: "#d1d1d1",
    lineHeight: 1.8,
  },

  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 18,
  },

  galleryCard: {
    overflow: "hidden",
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "#171717",
  },

  sliderWrap: {
    position: "relative",
    width: "100%",
    height: 400,
    overflow: "hidden",
    background: "#111",
    touchAction: "pan-y",
    overscrollBehavior: "contain",
  },

  sliderBaseImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  sliderAfterWrap: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    overflow: "hidden",
  },

  sliderOverlayImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  sliderDivider: {
    position: "absolute",
    top: 0,
    transform: "translateX(-50%)",
    width: 2,
    height: "100%",
    background: "rgba(255,255,255,0.95)",
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  },

  sliderHandle: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #f2cf64, #d6a327)",
    color: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    boxShadow: "0 10px 24px rgba(214,163,39,0.25)",
    animation: "dragHint 1.8s ease-in-out infinite",
    cursor: "ew-resize",
  },

  sliderInput: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "ew-resize",
    zIndex: 4,
    touchAction: "pan-y",
  },

  beforeLabel: {
    position: "absolute",
    top: 14,
    left: 14,
    background: "rgba(0,0,0,0.72)",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 800,
    zIndex: 5,
  },

  afterLabel: {
    position: "absolute",
    top: 14,
    right: 14,
    background: "rgba(0,0,0,0.72)",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 800,
    zIndex: 5,
  },

  checkCard: {
    background: "#171717",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 18,
    padding: 18,
    fontWeight: 800,
  },

  contactCard: {
    background: "#171717",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 22,
    padding: 24,
  },

  infoRow: {
    padding: "14px 0",
  },

  infoLabel: {
    color: "#bfbfbf",
    fontSize: 13,
    marginBottom: 4,
  },

  infoValue: {
    fontWeight: 800,
    lineHeight: 1.6,
  },

  infoLink: {
    fontWeight: 800,
    lineHeight: 1.6,
    color: "#fff",
    textDecoration: "none",
  },

  footer: {
    textAlign: "center",
    color: "#c7c7c7",
    padding: "24px 16px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    background: "#090909",
  },

  floatingWhats: {
    position: "fixed",
    right: 18,
    bottom: 18,
    width: 58,
    height: 58,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #f2cf64, #d6a327)",
    color: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontSize: 26,
    boxShadow: "0 12px 28px rgba(214,163,39,0.35)",
    zIndex: 99,
  },
};
