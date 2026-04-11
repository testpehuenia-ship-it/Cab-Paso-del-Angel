export const metadata = {
  title: 'Políticas de Reserva | El Paso del Ángel',
  description: 'Términos, condiciones y políticas de cancelación.'
};

export default function Politicas() {
  return (
    <>
      <section className="blog-section" style={{ paddingTop: '140px', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--surface)', padding: '4rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-ambient)' }}>
          <div className="section-title text-center" style={{ marginBottom: '3rem' }}>
            <h2>Políticas de Reserva</h2>
          </div>

          <div style={{ lineHeight: 1.8, color: 'var(--text-color)' }}>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>1. Reservas y Pagos</h3>
            <p>
              Para confirmar la reserva se requiere el abono del 50% del total de la estadía mediante transferencia bancaria. El 50% restante deberá ser abonado al momento del check-in.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2. Política de Cancelación</h3>
            <p>
              Las cancelaciones realizadas con más de 30 días de anticipación respecto a la fecha de llegada recibirán un reembolso del 100% de la seña, deduciendo los gastos administrativos. Las cancelaciones entre 15 y 29 días previos retendrán el 50% de la seña. Aquellas con menos de 15 días no tendrán reembolso.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>3. Check-in y Check-out</h3>
            <p>
              El horario de <strong>Check-in</strong> es a partir de las 15:00 hs. El horario de <strong>Check-out</strong> es hasta las 11:00 hs. Las salidas tardías (Late check-out) están sujetas a disponibilidad y pueden incurrir en cargos adicionales.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>4. Mascotas (Pet Friendly)</h3>
            <p>
              Aceptamos mascotas de raza pequeña (hasta 10kg) mediante aviso previo. Se aplicará una tarifa adicional por estadía para limpieza profunda. Deberán respetar siempre los espacios comunes y no quedarse solos en la cabaña.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
