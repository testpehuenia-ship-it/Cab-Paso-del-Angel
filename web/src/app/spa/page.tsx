import Link from 'next/link';

export const metadata = {
  title: 'Spa y Wellness Premium | El Paso del Ángel',
  description: 'Desconecta en nuestro Spa exclusivo. Piscina climatizada in/out con vista al bosque y lago, saunas, y biblioteca patagónica.'
};

export default function Spa() {
  return (
    <>
      <section className="blog-section" style={{ paddingTop: '140px', minHeight: '60vh' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '3rem' }}>
            <h2>Spa & Reflexión</h2>
            <p style={{ marginTop: '20px', fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', marginInline: 'auto' }}>
              Un santuario dedicado al equilibrio del cuerpo y la mente, donde el agua y el bosque se fusionan sin límites.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'revert', maxWidth: '1200px', margin: '0 auto 4rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-ambient)' }}>
             <img src="/assets/images/spa_interior.png" alt="Piscina Interior del Spa" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          </div>

          <div className="complex-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            <div className="glass-dark" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-light)' }}>Piscina In/Out</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Nuestra piscina se mantiene a 32°C. De un lado la calidez del interior en madera, y al cruzar el cristal, la frescura de la nieve o el bosque según la temporada.
                </p>
            </div>
            <div className="glass-dark" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-light)' }}>Tratamientos</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Masajes descontracturantes, piedras calientes y reflexología, usando elementos naturales de la región como la rosa mosqueta y aceites esenciales andinos.
                </p>
            </div>
          </div>
          
          <div className="text-center" style={{ marginBottom: '6rem' }}>
             <Link href="/reserva" className="btn-primary large">Reservar tu Estadía ➔</Link>
          </div>
        </div>
      </section>
    </>
  );
}
