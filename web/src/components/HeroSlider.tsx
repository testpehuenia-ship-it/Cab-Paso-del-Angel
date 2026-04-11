"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const images = [
    "/assets/images/hero.webp",
    "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2000&auto=format&fit=crop",
    "/assets/images/winter.webp"
];

export default function HeroSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const imgRefs = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        if (!sliderRef.current || imgRefs.current.length === 0) return;
        
        let currentIndex = 0;
        let interval: any;
        
        // Initial setup
        const firstImg = imgRefs.current[0];
        firstImg.style.zIndex = '2';
        gsap.set(firstImg, { scale: 0, opacity: 0, rotationX: 45 });
        gsap.to(firstImg, {
            scale: 1, rotationX: 0, opacity: 1,
            duration: 0.8, ease: "power3.out"
        });
        
        interval = setInterval(handleNext, 5000);

        function handleNext() {
            const prevIndex = currentIndex;
            currentIndex = (currentIndex + 1) % images.length;
            
            const outgoingImg = imgRefs.current[prevIndex];
            const incomingImg = imgRefs.current[currentIndex];
            
            outgoingImg.style.zIndex = '3';
            incomingImg.style.zIndex = '2';
            
            gsap.killTweensOf(incomingImg);
            gsap.set(incomingImg, { scale: 0, opacity: 0, rotationX: 45, y: "0%" });
            gsap.to(incomingImg, {
                scale: 1, rotationX: 0, opacity: 1,
                duration: 0.8, ease: "power3.out", delay: 0.1
            });
            
            gsap.killTweensOf(outgoingImg);
            gsap.to(outgoingImg, {
                y: "-150%",
                duration: 1.2, ease: "power3.inOut",
                onComplete: () => {
                    gsap.set(outgoingImg, { opacity: 0, y: "0%" }); 
                }
            });
        }

        return () => clearInterval(interval);
    }, []);

    return (
        <div 
            ref={sliderRef}
            className="hero-bg" 
            id="hero-slider"
            style={{ perspective: '1000px', overflow: 'hidden' }}
        >
            {images.map((src, idx) => (
                <img
                    key={idx}
                    ref={(el) => { if(el) imgRefs.current[idx] = el; }}
                    src={src}
                    style={{
                        position: 'absolute', inset: 0, width: '100%', height: '100%',
                        objectFit: 'cover', opacity: 0
                    }}
                    alt="Hero Slide"
                />
            ))}
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 5 }} />
        </div>
    );
}
