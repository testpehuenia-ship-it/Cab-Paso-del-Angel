"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const galleryData = [
    { common: 'Familia García', binomial: 'Disfrutando la nieve', photo: { url: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=900&auto=format&fit=crop&q=80', text: 'Familia', by: 'WhatsApp' } },
    { common: 'Pareja Aniversario', binomial: 'Atardecer en el lago', photo: { url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=900&auto=format&fit=crop&q=80', text: 'Pareja', by: 'Instagram' } },
    { common: 'Amigos en la Cabaña', binomial: 'Fin de semana largo', photo: { url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&auto=format&fit=crop&q=80', text: 'Amigos', pos: 'center', by: '@viajeros' } },
    { common: 'Desayuno Premium', binomial: 'Servicio a la habitación', photo: { url: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=900&auto=format&fit=crop&q=80', text: 'Desayuno', by: 'Google Reviews' } },
    { common: 'Relax Total', binomial: 'Área de Spa', photo: { url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&auto=format&fit=crop&q=80', text: 'Spa', by: 'TripAdvisor' } },
    { common: 'Aventuras', binomial: 'Trekking en el Bosque', photo: { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&auto=format&fit=crop&q=80', text: 'Bosque', by: 'Pinterest' } },
    { common: 'Escapada Romántica', binomial: 'Noches bajo las estrellas', photo: { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&auto=format&fit=crop&q=80', text: 'Montañas', by: 'Instagram' } },
    { common: 'Naturaleza Viva', binomial: 'Aguas turquesas', photo: { url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=900&auto=format&fit=crop&q=80', text: 'Lago brillante', by: 'WhatsApp' } },
    { common: 'Refugio de Invierno', binomial: 'Acogedor e imponente', photo: { url: '/assets/images/winter.webp', text: 'Bosque de invierno', by: 'Flickr' } },
    { common: 'Momentos Únicos', binomial: 'Paz absoluta', photo: { url: 'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?w=900&auto=format&fit=crop&q=80', text: 'Pinos gigantes', by: '@nomadas' } },
    { common: 'El Paraíso Patagónico', binomial: 'Vistas que enamoran', photo: { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&auto=format&fit=crop&q=80', text: 'Mirador épico', by: 'Google Reviews' } }
];

export default function CircularGallery() {
    const pivotRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile screen exactly once on mount to avoid hydration mismatch
        const checkMobile = () => window.innerWidth < 768;
        setIsMobile(checkMobile());
        
        const handleResize = () => setIsMobile(checkMobile());
        window.addEventListener('resize', handleResize);
        
        // Register GSAP here to avoid SSR "window not defined" errors
        gsap.registerPlugin(ScrollTrigger);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!pivotRef.current || !containerRef.current || isMobile) return;

        const radius = 580;
        const anglePerItem = 360 / galleryData.length;
        
        let currentRotation = 0;
        let isScrollingGallery = false;
        let scrollTimeout: NodeJS.Timeout;
        let animationFrame: number;

        function updateGalleryRotation(rot: number) {
            if (!pivotRef.current) return;
            pivotRef.current.style.transform = `rotateY(${rot}deg)`;
            
            itemsRef.current.forEach((itemEl, i) => {
                if (!itemEl) return;
                const itemAngle = i * anglePerItem;
                const MathAbs = Math.abs;
                const totalRotation = rot % 360;
                const relativeAngle = (itemAngle + totalRotation + 360) % 360;
                const normalizedAngle = MathAbs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
                const opacity = Math.max(0.3, 1 - (normalizedAngle / 180));
                
                itemEl.style.transform = `rotateY(${itemAngle}deg) translateZ(${radius}px)`;
                itemEl.style.opacity = opacity.toString();
            });
        }

        updateGalleryRotation(currentRotation);
        
        // Enable 3D scroll trigger
        let lastProgress = 0;
        const trigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
                if (self.isActive) {
                    isScrollingGallery = true;
                    clearTimeout(scrollTimeout);
                    
                    const delta = self.progress - lastProgress;
                    lastProgress = self.progress;
                    
                    currentRotation += delta * 720;
                    
                    scrollTimeout = setTimeout(() => {
                        isScrollingGallery = false;
                    }, 150);
                }
            }
        });

        function autoRotate() {
            if (!isScrollingGallery) {
                currentRotation -= 0.1;
                updateGalleryRotation(currentRotation);
            } else {
                updateGalleryRotation(currentRotation);
            }
            animationFrame = requestAnimationFrame(autoRotate);
        }
        animationFrame = requestAnimationFrame(autoRotate);

        return () => {
            cancelAnimationFrame(animationFrame);
            clearTimeout(scrollTimeout);
            trigger.kill();
        };
    }, [isMobile]); // re-run if isMobile changes, though usually static per device

    if (isMobile) {
        // Fallback Mobile Layout (Horizontal Native Scroll)
        return (
            <section className="gallery-section" id="galeria-clientes" style={{ padding: '60px 0', background: 'var(--primary)' }}>
                <div className="gallery-header" style={{ position: 'relative', textAlign: 'center', marginBottom: '32px' }}>
                    <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '8px' }}>Recuerdos en Pehuenia</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', padding: '0 16px' }}>Desliza para descubrir sus experiencias</p>
                </div>
                
                <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '0 24px', scrollSnapType: 'x mandatory', paddingBottom: '20px' }}>
                    {galleryData.map((item, i) => (
                        <div key={i} style={{ minWidth: '280px', flexShrink: 0, scrollSnapAlign: 'center', background: 'var(--surface-dark)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                            <img src={item.photo.url} alt={item.photo.text} style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: item.photo.pos || 'center' }} />
                            <div style={{ padding: '20px', background: 'white' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', color: 'var(--primary)' }}>{item.common}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '8px', fontStyle: 'italic' }}>"{item.binomial}"</p>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Vía {item.photo.by}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    // Default Desktop Layout (3D Scroll Gallery)
    return (
        <section className="gallery-section" id="galeria-clientes">
            <div className="gallery-scroll-container" ref={containerRef}>
                <div className="gallery-sticky">
                    <div className="gallery-header">
                        <h2 style={{ color: 'white' }}>Recuerdos en Pehuenia</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)' }}>Haz scroll para rotar la galería y descubrir sus experiencias</p>
                    </div>
                    
                    <div className="circular-gallery">
                        <div className="gallery-pivot" id="circular-pivot" ref={pivotRef}>
                            {galleryData.map((item, i) => (
                                <div key={i} className="gallery-item" ref={(el) => { itemsRef.current[i] = el; }}>
                                    <img src={item.photo.url} alt={item.photo.text} style={{ objectPosition: item.photo.pos || 'center' }} />
                                    <div className="gallery-item-content">
                                        <h3>{item.common}</h3>
                                        <p>"{item.binomial}"</p>
                                        <span>Vía {item.photo.by}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
