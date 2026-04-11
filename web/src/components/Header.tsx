'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`navbar ${menuOpen ? 'menu-open' : ''}`} id="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>El Paso del Ángel</Link>
        <nav className="nav-links">
          <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link href="/cabanas" onClick={() => setMenuOpen(false)}>Cabañas</Link>
          <Link href="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
          <Link href="/ubicacion" onClick={() => setMenuOpen(false)}>Ubicación</Link>
        </nav>
        <div className="nav-actions">
          <Link href="/reserva" className="btn-primary" onClick={() => setMenuOpen(false)}>Reservar</Link>
        </div>
        <div className="mobile-menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </div>
      </div>
    </header>
  );
}
