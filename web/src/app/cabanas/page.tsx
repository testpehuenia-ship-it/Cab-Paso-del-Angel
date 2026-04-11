import Link from 'next/link';

export const metadata = {
  title: 'Nuestras Cabañas Premium | El Paso del Ángel',
  description: 'Descubre en detalle nuestras comodidades: diseño orgánico, máxima privacidad y equipamiento de hotel boutique.'
};

const cabins = [
  {
    name: "Brisas del Lago",
    img: "/assets/images/cabin1.webp",
    desc: "Suaves vientos patagónicos y vistas inigualables al lago Aluminé. Diseñada para ofrecer calma total y un descanso impecable al sonido de la naturaleza.",
    tags: [
      { text: "Vista al Lago", icon: "ph ph-waves" },
      { text: "Jacuzzi Privado", icon: "ph ph-drop" },
      { text: "Hogar a Leña", icon: "ph ph-fire" }
    ]
  },
  {
    name: "Claro de Luna",
    img: "/assets/images/cabin_interior.png",
    desc: "Ventanales panorámicos que enmarcan cielos infinitos y estrellados. El refugio perfecto de absoluta intimidad para parejas buscando desconexión.",
    tags: [
      { text: "Cielo Estrellado", icon: "ph ph-moon" },
      { text: "Cama King Size", icon: "ph ph-bed" },
      { text: "Terraza Privada", icon: "ph ph-armchair" }
    ]
  },
  {
    name: "Naciente del Sol",
    img: "/assets/images/winter.webp",
    desc: "Despierta con la primera luz del día bañando las montañas iluminando todo su interior. Sus amplios espacios abiertos irradian calidez.",
    tags: [
      { text: "Luz Natural", icon: "ph ph-sun" },
      { text: "Cocina Equipada", icon: "ph ph-cooking-pot" },
      { text: "Parrilla Exterior", icon: "ph ph-campfire" }
    ]
  },
  {
    name: "Rincón del Paraíso",
    img: "/assets/images/gastronomy.webp", 
    desc: "Mimetizada en la total profundidad de nuestro bosque de milenarias araucarias, donde el silencio es el verdadero protagonista del hospedaje.",
    tags: [
      { text: "Entorno Bosque", icon: "ph ph-tree" },
      { text: "Losa Radiante", icon: "ph ph-thermometer" },
      { text: "Calidez Total", icon: "ph ph-coffee" }
    ]
  },
  {
    name: "Amanecer en la Cordillera",
    img: "/assets/images/hero.webp",
    desc: "Elevada sobre el terreno, dominando espectacularmente las vistas al imponente cordón montañoso. Diseño orgánico en su máxima expresión.",
    tags: [
      { text: "Vista Montañas", icon: "ph ph-mountains" },
      { text: "Espacio Amplio", icon: "ph ph-users" },
      { text: "Privacidad", icon: "ph ph-key" }
    ]
  }
];

export default function Cabanas() {
  return (
    <>
      <section className="blog-section" style={{ paddingTop: '140px', minHeight: '60vh' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '3rem' }}>
            <h2>Nuestras Cabañas Premium</h2>
            <p style={{ marginTop: '20px', fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', marginInline: 'auto' }}>
              Refugios de alta gama con diseño orgánico y total mimetización con el entorno patagónico. Privacidad absoluta en armonía con Pehuenia.
            </p>
          </div>

          <div className="card-grid" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '6rem' }}>
            {cabins.map((cabin, index) => (
              <div 
                key={index} 
                className="card cabana-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  background: 'var(--surface-dark)', 
                  borderRadius: 'var(--radius-lg)', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-ambient)' 
                }}
              >
                <div className="cabana-gallery" style={{ width: '100%', height: '350px' }}>
                  <img src={cabin.img} alt={`Vista de ${cabin.name}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="card-content" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h3 style={{ fontSize: '2.2rem', color: 'var(--text-light)', margin: 0 }}>{cabin.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
                    {cabin.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                    {cabin.tags.map((tag, i) => (
                      <span key={i} className="tag" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-light)', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                        <i className={tag.icon} style={{ color: 'var(--accent)', fontSize: '1.2rem' }}></i> {tag.text}
                      </span>
                    ))}
                  </div>
                  <Link href="/reserva" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>Reservar {cabin.name}</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="complex-services glassmorphism" style={{ padding: '4rem', marginTop: '4rem' }}>
            <div className="section-title text-center">
              <h3 style={{ fontSize: '2.5rem' }}>Áreas Exclusivas del Complejo</h3>
              <p>Disfruta de instalaciones de primer nivel a pasos de tu cabaña.</p>
            </div>
            
            <div className="complex-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
              <div className="c-item text-center">
                <div className="icon-wrap" style={{ margin: '0 auto 1.5rem', background: 'var(--surface)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: 'var(--accent)' }}>
                  <i className="ph ph-barbell"></i>
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>Gimnasio</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Equipamiento Life Fitness y vistas inspiradoras.</p>
              </div>
              <div className="c-item text-center">
                <div className="icon-wrap" style={{ margin: '0 auto 1.5rem', background: 'var(--surface)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: 'var(--accent)' }}>
                  <i className="ph ph-waves"></i>
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>Spa & Pileta In/Out</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Piscina climatizada templada a 32°C todo el año.</p>
                <Link href="/spa" style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 'bold' }}>Ver el Spa ➔</Link>
              </div>
              <div className="c-item text-center">
                <div className="icon-wrap" style={{ margin: '0 auto 1.5rem', background: 'var(--surface)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: 'var(--accent)' }}>
                  <i className="ph ph-martini"></i>
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>Club House</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Barra de tragos y livings con biblioteca patagónica.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
