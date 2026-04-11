import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';
import CircularGallery from '../components/CircularGallery';

export default function Home() {
  return (
    <>

      <section className="hero" id="home">
          <HeroSlider />
          <div className="container hero-content">
              <h1 className="fade-in" style={{ position: "relative", zIndex: 10 }}>Cabañas en Villa Pehuenia -<br />El Paso del Ángel</h1>
              <p className="fade-in delay-1" style={{ position: "relative", zIndex: 10 }}>Siente la inmensidad de la Patagonia desde tu refugio privado en el Paraiso.</p>
          </div>
      </section>

      <section className="booking-section" style={{ position: "relative", zIndex: 20, background: "var(--surface)" }}>
          <div className="container">
              <div className="booking-widget wrapper glassmorphism fade-in delay-2" id="reserva" style={{ position: "relative", margin: "40px auto", boxShadow: "var(--shadow-ambient)" }}>
                  <div className="booking-inputs">
                      <div className="input-group">
                          <label>Llegada</label>
                          <input type="date" />
                      </div>
                      <div className="input-group">
                          <label>Salida</label>
                          <input type="date" />
                      </div>
                      <div className="input-group">
                          <label>Huéspedes</label>
                          <select>
                              <option>2 Personas</option>
                              <option>4 Personas</option>
                              <option>Familia</option>
                          </select>
                      </div>
                      <Link href="/reserva" className="btn-primary large" style={{ textAlign: "center" }}>Consultar Disponibilidad</Link>
                  </div>
              </div>
          </div>
      </section>

      <section className="uvp-section">
          <div className="container uvp-grid">
              <div className="uvp-item">
                  <div className="icon" style={{ color: "var(--accent)" }}><i className="ph ph-waves" style={{ fontSize: "3rem" }}></i></div>
                  <h3>Privilegio Frente al Lago</h3>
                  <p>Acceso directo a las aguas cristalinas del Aluminé.</p>
              </div>
              <div className="uvp-item">
                  <div className="icon" style={{ color: "var(--accent)" }}><i className="ph ph-plant" style={{ fontSize: "3rem" }}></i></div>
                  <h3>Spa Exclusivo</h3>
                  <p>Sesiones de relajación con vistas al bosque eterno.</p>
              </div>
              <div className="uvp-item">
                  <div className="icon" style={{ color: "var(--accent)" }}><i className="ph ph-bell-ringing" style={{ fontSize: "3rem" }}></i></div>
                  <h3>Atención Personalizada</h3>
                  <p>Tu concierge digital para cada necesidad del viaje.</p>
              </div>
          </div>
      </section>

      <section className="cabanas-section" id="cabanas">
          <div className="container">
              <div className="section-title">
                  <h2>Tu Alojamiento Familiar o en Pareja en La Patagonia</h2>
                  <p>Diseño orgánico y comodidades de hotel boutique para no querer salir jamás.</p>
              </div>
              
              <div className="card-grid">
                  <div className="card cabana-card">
                      <img src="/assets/images/cabin1.webp" alt="Fachada de cabaña El Paso del Angel en Villa Pehuenia, suite con jacuzzi vista al lago" />
                      <div className="card-content">
                          <h3>Suite Premium con Jacuzzi</h3>
                          <ul className="features">
                              <li>✓ Vista panorámica al lago</li>
                              <li>✓ Losa radiante y hogar a leña</li>
                              <li>✓ Jacuzzi interior hidromasaje</li>
                          </ul>
                          <Link href="/cabanas" className="btn-secondary" style={{ textAlign: "center", display: "inline-block" }}>Ver Tarifas Directas</Link>
                      </div>
                  </div>
                  <div className="card cabana-card">
                      <img src="/assets/images/cabin1.webp" alt="Cabaña familiar El Paso del Angel cubierta de nieve en Villa Pehuenia" />
                      <div className="card-content">
                          <h3>Cabaña Familiar del Bosque</h3>
                          <ul className="features">
                              <li>✓ Capacidad 4 a 6 personas</li>
                              <li>✓ Cocina completa equipada</li>
                              <li>✓ Deck y parrilla privada</li>
                          </ul>
                          <Link href="/cabanas" className="btn-secondary" style={{ textAlign: "center", display: "inline-block" }}>Ver Tarifas Directas</Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="lead-magnet" style={{ backgroundImage: "linear-gradient(rgba(26, 47, 35, 0.8), rgba(26, 47, 35, 0.9)), url('/assets/images/winter.webp')" }}>
          <div className="container lm-content">
              <h2>¿Primera vez en Pehuenia?</h2>
              <p>Descarga gratis nuestra guía exclusiva con mapas, secretos del Batea Mahuida y lugares donde come la gente local.</p>
              <form className="lm-form" action="/guia">
                  <input type="email" placeholder="Tu mejor correo" required />
                  <button type="submit" className="btn-primary">Obtener Guía en PDF</button>
              </form>
          </div>
      </section>

      <section className="blog-section" id="experiencias">
          <div className="container">
              <div className="section-title">
                  <h2>Experiencias Inolvidables: Qué Hacer en Villa Pehuenia</h2>
              </div>
              
              <div className="card-grid asymetric-grid">
                  <div className="card blog-card">
                      <img src="/assets/images/winter.webp" alt="Esquí en Invierno" />
                      <div className="card-content">
                          <span className="tag">❄️ Nieve</span>
                          <h3>Esquí y raquetas en el Batea Mahuida</h3>
                          <p>Descubre el parque de nieve administrado por la comunidad Mapuche Puel.</p>
                          <Link href="/experiencias" className="inline-link">Vive esta experiencia quedándote con nosotros ➔</Link>
                      </div>
                  </div>
                  
                  <div className="card blog-card">
                      <img src="/assets/images/gastronomy.webp" alt="Ruta del Piñón" />
                      <div className="card-content">
                          <span className="tag">🍷 Gastronomía</span>
                          <h3>La ruta sagrada del Piñón (Araucaria)</h3>
                          <p>Un recorrido por los mejores platos de autor utilizando el fruto milenario.</p>
                          <Link href="/experiencias" className="inline-link">Vive esta experiencia quedándote con nosotros ➔</Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <CircularGallery />

      <section className="reviews-section">
          <div className="container text-center">
              <h2 style={{ marginBottom: "2rem" }}>Lo que dicen nuestros huéspedes</h2>
              <div className="reviews-container" itemScope itemType="https://schema.org/Review">
                  <div className="review-card glass-dark">
                      <div className="stars" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                          <meta itemProp="ratingValue" content="5" />
                          ★★★★★
                      </div>
                      <p itemProp="reviewBody">"Reservar desde su web fue súper fácil y además nos dieron una botella de vino local por reservar directo. La cabaña y la vista, un 10."</p>
                      <span className="author">- <span itemProp="author" itemScope itemType="https://schema.org/Person"><span itemProp="name">Martín</span></span> (vía Google)</span>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
