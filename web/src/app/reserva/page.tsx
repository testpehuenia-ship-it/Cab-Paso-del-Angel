import Link from 'next/link';

export const metadata = {
  title: 'Reservar | El Paso del Ángel',
  description: 'Garantiza el mejor precio reservando de forma directa.'
};

export default function Reserva() {
  return (
    <>
      <section className="blog-section" style={{ paddingTop: '140px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '3rem' }}>
            <h2>Garantiza tu Lugar en la Patagonia</h2>
            <p style={{ marginTop: '20px', fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', marginInline: 'auto' }}>
              Las reservas directas no sólo te aseguran la mejor tarifa disponible, sino que incluyen beneficios exclusivos en nuestro Spa y cortesías de bienvenida locales.
            </p>
          </div>

          <div className="glassmorphism" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.8rem' }}>Consulta de Disponibilidad</h3>
            <form style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Fecha de Llegada</label>
                <input type="date" required style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--surface)', fontFamily: 'inherit' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Fecha de Salida</label>
                <input type="date" required style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--surface)', fontFamily: 'inherit' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Alojamiento</label>
                <select style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--surface)', fontFamily: 'inherit' }}>
                  <option>Suite Premium con Jacuzzi (2 Pers)</option>
                  <option>Cabaña Familiar (4 a 6 Pers)</option>
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '2rem' }}>
                <button type="submit" className="btn-primary large" style={{ minWidth: '300px' }}>Solicitar Presupuesto Directo</button>
              </div>
            </form>

            <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>O si prefieres atención inmediata, escríbenos directamente:</p>
              <a href="https://wa.me/5492942000000" target="_blank" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <i className="ph-fill ph-whatsapp-logo" style={{ fontSize: '1.4rem' }}></i> Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
