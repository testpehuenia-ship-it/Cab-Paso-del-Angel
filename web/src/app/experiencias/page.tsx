import Link from 'next/link';

export const metadata = {
  title: 'Experiencias y Actividades | El Paso del Ángel',
  description: 'Descubre qué hacer en Villa Pehuenia: Esquí en Batea Mahuida, gastronomía local (Ruta del Piñón), trekking y mucho más.'
};

export default function Experiencias() {
  return (
    <>
      <section className="blog-section" style={{ paddingTop: '140px', minHeight: '60vh' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '4rem' }}>
            <h2>Experiencias Inolvidables en Pehuenia</h2>
            <p style={{ marginTop: '20px', fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', marginInline: 'auto' }}>
              La ubicación privilegiada de nuestras cabañas te permite acceder en minutos a lo mejor de la Patagonia.
            </p>
          </div>
          
          <div className="card-grid asymetric-grid" style={{ marginBottom: '4rem' }}>
            <div className="card blog-card">
              <img src="/assets/images/winter.webp" alt="Esquí en Invierno" />
              <div className="card-content">
                <span className="tag">❄️ Invierno & Nieve</span>
                <h3>Esquí en el Parque de Nieve Batea Mahuida</h3>
                <p>Ubicado a tan solo minutos del complejo, disfruta de un parque amigable administrado por la comunidad Mapuche Puel. Ideal para esquí familiar y raquetas.</p>
              </div>
            </div>
            
            <div className="card blog-card">
              <img src="/assets/images/gastronomy.webp" alt="Ruta del Piñón" />
              <div className="card-content">
                <span className="tag">🍷 Cultura & Gastronomía</span>
                <h3>La Ruta Sagrada del Piñón</h3>
                <p>Un recorrido por los mejores platos de autor que rinden homenaje al fruto de la Araucaria. Te recomendamos los mejores bistrós locales.</p>
              </div>
            </div>

            <div className="card blog-card" style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
              <img src="/assets/images/hero.webp" alt="Lago Aluminé en Verano" style={{ flex: 1, height: '300px', objectFit: 'cover' }} />
              <div className="card-content" style={{ flex: 1, padding: '3rem' }}>
                <span className="tag">☀️ Verano & Aventura</span>
                <h3>Playas del Lago Aluminé y Moquehue</h3>
                <p>Navega en kayak, practica pesca con mosca o simplemente relájate en las playas de arena blanca volcánica de nuestro lago homónimo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
