import Link from 'next/link';

export const metadata = {
  title: 'Ubicación y Cómo Llegar | El Paso del Ángel',
  description: 'Encuentra las mejores rutas hacia Villa Pehuenia, Neuquén, Argentina.'
};

export default function Ubicacion() {
  return (
    <>
      <section className="blog-section" style={{ paddingTop: '140px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'center' }}>
          
          <div className="contacto-info text-left">
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Nuestra Ubicación</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Nos encontramos en la entrada de la mítica Villa Pehuenia, rodeados de bosques nativos de Araucarias milenarias y frente a los lagos glaciares Aluminé y Moquehue. 
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', color: 'var(--accent)' }}><i className="ph-fill ph-map-pin"></i></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem' }}>Coordenadas GPS</h4>
                  <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 0' }}>38°53'16.1"S 71°10'33.2"W</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', color: 'var(--accent)' }}><i className="ph-fill ph-car"></i></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem' }}>Cómo llegar en Auto</h4>
                  <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 0' }}>Por RN 22 hasta Zapala, luego RP 13 hasta Primeros Pinos o RP 46 y RP 23 vía Rahue (recomendado en invierno).</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '2rem', color: 'var(--accent)' }}><i className="ph-fill ph-airplane"></i></div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem' }}>Vuelos Cercanos</h4>
                  <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 0' }}>Aeropuerto Chapelco (SMA) a 200km.<br/>Aeropuerto de Neuquén Capital a 310km.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glassmorphism" style={{ padding: '0.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
             {/* Map Placeholder */}
             <div style={{ width: '100%', height: '500px', backgroundColor: '#e5e3df', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                <i className="ph-fill ph-map-trifold" style={{ fontSize: '4rem', color: 'var(--accent)' }}></i>
                <p style={{ color: 'var(--text-color)', fontWeight: 600 }}>Mapa Interactivo Google Maps</p>
                <Link href="https://maps.google.com" target="_blank" className="btn-secondary">Abrir en Google Maps</Link>
             </div>
          </div>

        </div>
      </section>
    </>
  );
}
