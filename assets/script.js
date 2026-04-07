document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navigation handling
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Simple Mobile Menu toggle
    const mobileBtn = document.querySelector('.mobile-menuBtn');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    mobileBtn.addEventListener('click', () => {
        const isVisible = navLinks.style.display === 'flex';
        navLinks.style.display = isVisible ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--primary)';
        navLinks.style.padding = '20px';
        
        navActions.style.display = isVisible ? 'none' : 'flex';
        navActions.style.flexDirection = 'column';
    });

    // 3. 3D Web Experience (Three.js + GSAP ScrollTrigger)
    const canvasContainer = document.getElementById('canvas-container');
    if (canvasContainer && window.THREE) {
        // Initialize Scene, Camera, Renderer
        const scene = new THREE.Scene();
        // Subtle fog for depth
        scene.fog = new THREE.FogExp2(0x1A2F23, 0.015);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Optimize for performance as per skill.md recommendations
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
        canvasContainer.appendChild(renderer.domElement);

        // Create Magical Particles (angelic dust / snow)
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = window.innerWidth < 768 ? 600 : 1500; // Mobile optimization
        
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) {
            // Spread particles over a large coordinate area
            posArray[i] = (Math.random() - 0.5) * 100;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.15,
            color: 0xffffff,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Mouse Context for Parallax
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        });

        // Animation Loop
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Default subtle organic rotation
            particlesMesh.rotation.y = elapsedTime * 0.02;
            
            // Mouse parallax effect mixing
            targetX = mouseX * 0.0005;
            targetY = mouseY * 0.0005;
            
            particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
            particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
            // Move particles slightly upwards over time
            particlesMesh.position.y = Math.sin(elapsedTime * 0.5) * 2;

            renderer.render(scene, camera);
        }
        animate();

        // Integrate with GSAP for the Scroll-Driven 3D Pattern
        if (window.gsap && window.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
            
            // Spin and dive into the particles as user scrolls
            gsap.to(particlesMesh.rotation, {
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1
                },
                x: Math.PI * 0.5,
                z: Math.PI * 0.5
            });

            gsap.to(camera.position, {
                scrollTrigger: {
                    trigger: ".uvp-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
                z: 10,
                y: -5
            });
        }

        // Handle Resize seamlessly
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
});
