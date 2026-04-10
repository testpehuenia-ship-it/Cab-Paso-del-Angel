document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navigation handling
    const navbar = document.getElementById('navbar');
    const hasHero = document.querySelector('.hero');
    
    if (navbar && !hasHero) {
        navbar.classList.add('scrolled');
    }
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50 || !hasHero) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Simple Mobile Menu toggle
    const mobileBtn = document.querySelector('.mobile-menuBtn');

    if (mobileBtn && navbar) {
        mobileBtn.addEventListener('click', () => {
            navbar.classList.toggle('menu-open');
        });
    }

    // 3. React-inspired ImagesSlider Logic (Vanilla + GSAP)
    const heroSlider = document.getElementById('hero-slider');
    if (heroSlider && window.gsap) {
        const images = [
            "assets/images/hero.webp",
            "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2000&auto=format&fit=crop",
            "assets/images/winter.webp"
        ];
        
        heroSlider.style.perspective = '1000px';
        heroSlider.style.overflow = 'hidden';
        
        let currentIndex = 0;
        let imageElements = [];
        
        images.forEach((src) => {
            const img = document.createElement('img');
            img.src = src;
            img.style.position = 'absolute';
            img.style.inset = '0';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.objectPosition = 'center';
            img.style.opacity = '0';
            heroSlider.appendChild(img);
            imageElements.push(img);
        });

        // Add overlay locally since we replaced hero-bg contents
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.inset = '0';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = '5';
        heroSlider.appendChild(overlay);

        const firstImg = new Image();
        firstImg.src = images[0];
        firstImg.onload = () => {
            imageElements[0].style.zIndex = '2';
            gsap.set(imageElements[0], { scale: 0, opacity: 0, rotationX: 45 });
            gsap.to(imageElements[0], {
                scale: 1, rotationX: 0, opacity: 1,
                duration: 0.8, ease: "power3.out"
            });
            
            setInterval(handleNext, 5000);
        };

        function handleNext() {
            const prevIndex = currentIndex;
            currentIndex = (currentIndex + 1) % images.length;
            
            const outgoingImg = imageElements[prevIndex];
            const incomingImg = imageElements[currentIndex];
            
            // Reset Z-indexes. Outgoing should be above incoming during transition
            outgoingImg.style.zIndex = '3';
            incomingImg.style.zIndex = '2';
            
            // Animate Incoming
            gsap.killTweensOf(incomingImg);
            gsap.set(incomingImg, { scale: 0, opacity: 0, rotationX: 45, y: "0%" });
            gsap.to(incomingImg, {
                scale: 1, rotationX: 0, opacity: 1,
                duration: 0.8, ease: "power3.out", delay: 0.1
            });
            
            // Animate Outgoing (UpExit)
            gsap.killTweensOf(outgoingImg);
            gsap.to(outgoingImg, {
                y: "-150%",
                duration: 1.2, ease: "power3.inOut",
                onComplete: () => {
                    gsap.set(outgoingImg, { opacity: 0, y: "0%" }); 
                }
            });
        }
    }
    // 4. Circular 3D Gallery (Scroll & Auto-rotate)
    const galleryPivot = document.getElementById('circular-pivot');
    if (galleryPivot) {
        const galleryData = [
            {
                common: 'Familia García',
                binomial: 'Disfrutando la nieve',
                photo: { url: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=900&auto=format&fit=crop&q=80', text: 'Familia', by: 'WhatsApp' }
            },
            {
                common: 'Pareja Aniversario',
                binomial: 'Atardecer en el lago',
                photo: { url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=900&auto=format&fit=crop&q=80', text: 'Pareja', by: 'Instagram' }
            },
            {
                common: 'Amigos en la Cabaña',
                binomial: 'Fin de semana largo',
                photo: { url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&auto=format&fit=crop&q=80', text: 'Amigos', pos: 'center', by: '@viajeros' }
            },
            {
                common: 'Desayuno Premium',
                binomial: 'Servicio a la habitación',
                photo: { url: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=900&auto=format&fit=crop&q=80', text: 'Desayuno', by: 'Google Reviews' }
            },
            {
                common: 'Relax Total',
                binomial: 'Área de Spa',
                photo: { url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&auto=format&fit=crop&q=80', text: 'Spa', by: 'TripAdvisor' }
            },
            {
                common: 'Aventuras',
                binomial: 'Trekking en el Bosque',
                photo: { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&auto=format&fit=crop&q=80', text: 'Bosque', by: 'Pinterest' }
            },
            {
                common: 'Escapada Romántica',
                binomial: 'Noches bajo las estrellas',
                photo: { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&auto=format&fit=crop&q=80', text: 'Montañas', by: 'Instagram' }
            },
            {
                common: 'Naturaleza Viva',
                binomial: 'Aguas turquesas',
                photo: { url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=900&auto=format&fit=crop&q=80', text: 'Lago brillante', by: 'WhatsApp' }
            },
            {
                common: 'Refugio de Invierno',
                binomial: 'Acogedor e imponente',
                photo: { url: 'assets/images/winter.webp', text: 'Bosque de invierno', by: 'Flickr' }
            },
            {
                common: 'Momentos Únicos',
                binomial: 'Paz absoluta',
                photo: { url: 'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?w=900&auto=format&fit=crop&q=80', text: 'Pinos gigantes', by: '@nomadas' }
            },
            {
                common: 'El Paraíso Patagónico',
                binomial: 'Vistas que enamoran',
                photo: { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&auto=format&fit=crop&q=80', text: 'Mirador épico', by: 'Google Reviews' }
            }
        ];

        // Minor tweak so it bunches them up given there are now 11
        const radius = window.innerWidth < 768 ? 400 : 580;
        const anglePerItem = 360 / galleryData.length;
        
        let currentRotation = 0;
        let isScrollingGallery = false;
        let scrollTimeout = null;

        const itemsElements = [];
        galleryData.forEach((item, i) => {
            const itemAngle = i * anglePerItem;
            
            const card = document.createElement('div');
            card.className = 'gallery-item';
            card.innerHTML = `
                <img src="${item.photo.url}" alt="${item.photo.text}" style="object-position: ${item.photo.pos || 'center'}">
                <div class="gallery-item-content">
                    <h3>${item.common}</h3>
                    <p>"${item.binomial}"</p>
                    <span>Vía ${item.photo.by}</span>
                </div>
            `;
            galleryPivot.appendChild(card);
            itemsElements.push({ el: card, angle: itemAngle });
        });

        function updateGalleryRotation(rot) {
            galleryPivot.style.transform = `rotateY(${rot}deg)`;
            
            itemsElements.forEach(item => {
                const totalRotation = rot % 360;
                const relativeAngle = (item.angle + totalRotation + 360) % 360;
                const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
                const opacity = Math.max(0.3, 1 - (normalizedAngle / 180));
                
                item.el.style.transform = `rotateY(${item.angle}deg) translateZ(${radius}px)`;
                item.el.style.opacity = opacity;
            });
        }
        updateGalleryRotation(currentRotation);

        let lastProgress = 0;
        if (window.gsap && window.ScrollTrigger) {
            ScrollTrigger.create({
                trigger: ".gallery-scroll-container",
                start: "top bottom",
                end: "bottom top",
                onUpdate: (self) => {
                    if (self.isActive) {
                        isScrollingGallery = true;
                        clearTimeout(scrollTimeout);
                        
                        const delta = self.progress - lastProgress;
                        lastProgress = self.progress;
                        
                        // User scrolling forwards rotates the gallery
                        currentRotation += delta * 720;
                        
                        scrollTimeout = setTimeout(() => {
                            isScrollingGallery = false;
                        }, 150);
                    }
                }
            });
        }

        function autoRotate() {
            if (!isScrollingGallery) {
                // Auto spin
                currentRotation -= 0.1;
                updateGalleryRotation(currentRotation);
            } else {
                // Keep applying the GSAP mapped rotation
                updateGalleryRotation(currentRotation);
            }
            requestAnimationFrame(autoRotate);
        }
        requestAnimationFrame(autoRotate);
    }
});
