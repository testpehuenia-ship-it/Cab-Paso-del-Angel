import Link from 'next/link';

export const metadata = {
  title: 'Contacto | El Paso del Ángel',
  description: 'Ponte en contacto con nuestro equipo para tu estadía en Villa Pehuenia.'
};

export default function Contacto() {
  return (
    <>
      <section className="blog-section" style={{ paddingTop: '140px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'center' }}>
          
          <div className="contacto-info text-left">
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Hablemos</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Nuestro Concierge Digital está a tu disposición para organizar cada detalle de tu viaje exclusivo a la Patagonia.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', color: 'var(--accent)' }}><i className="ph-fill ph-map-pin"></i></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem' }}>Ubicación</h4>
                  <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 0' }}>Ruta Provincial 11, Km 5<br/>Villa Pehuenia, Neuquén, Argentina</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', color: 'var(--accent)' }}><i className="ph-fill ph-whatsapp-logo"></i></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem' }}>WhatsApp & Reservas</h4>
                  <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 0' }}>+54 9 2942 000000</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', color: 'var(--accent)' }}><i className="ph-fill ph-envelope"></i></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem' }}>Email</h4>
                  <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 0' }}>reservas@pasodelangel.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contacto-form glassmorphism" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginBottom: '2rem' }}>Envía tu consulta</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Nombre</label>
                  <input type="text" placeholder="Ej: Maria Lopez" required style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--surface)', fontFamily: 'inherit' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Email</label>
                <input type="email" placeholder="maria@correo.com" required style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--surface)', fontFamily: 'inherit' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Asunto</label>
                <select style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--surface)', fontFamily: 'inherit' }}>
                  <option>Reserva de Cabañas</option>
                  <option>Atención para Grupos/Eventos</option>
                  <option>Dudas sobre la ubicación</option>
                  <option>Otros</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Mensaje</label>
                <textarea placeholder="Cuéntanos..." rows={4} required style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: 'var(--surface)', fontFamily: 'inherit', resize: 'none' }}></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Enviar Consulta</button>
            </form>
          </div>

        </div>
      </section>
      <section style={{ width: '100%', padding: '0 20px 80px' }}>
        <div className="container" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '450px', padding: 0, boxShadow: 'var(--shadow-ambient)' }}>
          <iframe 
            src="https://maps.google.com/maps?q=CABAÑAS+EL+PASO+DEL+ANGEL,-38.884559,-71.1660296&t=p&z=15&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
