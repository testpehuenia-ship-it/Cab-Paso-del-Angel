export const metadata = {
  title: 'Guía de Pehuenia | El Paso del Ángel',
  description: 'Descarga la guía exclusiva con los mejores lugares de Villa Pehuenia.'
};

export default function Guia() {
  return (
    <>
      <section className="blog-section" style={{ paddingTop: '140px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          <div className="text-left">
            <span className="tag" style={{ background: 'var(--accent)', color: 'white', marginBottom: '1rem', display: 'inline-block' }}>Ebook Gratuito</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>La Guía Definitiva de Villa Pehuenia</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Descarga gratis nuestra guía exclusiva de 25 páginas con mapas interactivos, secretos del Batea Mahuida que no salen en internet y los restaurantes escondidos donde come la gente local.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="ph-fill ph-check-circle" style={{ color: 'var(--accent)', fontSize: '1.5rem' }}></i> Mapas de trekking estacionales</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="ph-fill ph-check-circle" style={{ color: 'var(--accent)', fontSize: '1.5rem' }}></i> Presupuestos y costos promedios</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="ph-fill ph-check-circle" style={{ color: 'var(--accent)', fontSize: '1.5rem' }}></i> Calendario de clima ideal</li>
            </ul>
          </div>

          <div className="glassmorphism" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', textAlign: 'center' }}>¿Dónde te la enviamos?</h3>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>Recíbelo en tu correo en menos de 1 minuto.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <input type="text" placeholder="Tu Nombre" required style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--surface)', fontFamily: 'inherit' }} />
              </div>
              
              <div>
                <input type="email" placeholder="Tu Email Principal" required style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--surface)', fontFamily: 'inherit' }} />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '15px' }}>Descargar Guía en PDF</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
