// js/three-background.js
(function() {
    "use strict";

    let scene, camera, renderer;
    let particles, particleMaterial;
    const particleCount = 2000; // Number of particles
    const mouse = new THREE.Vector2();
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    function initThreeJS() {
        const canvas = document.getElementById('bg-canvas');
        if (!canvas) {
            console.error("Background canvas not found!");
            return;
        }

        // Scene
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x080a10, 0.0015); // Match background color, adjust density

        // Camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
        camera.position.z = 1000;

        // Renderer
        renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); // alpha:true for transparent background if needed over another bg
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Transparent clear color, canvas bg set by CSS

        // Particles
        const particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const color1 = new THREE.Color(0x5c96ff); // Blue accent
        const color2 = new THREE.Color(0xaaaaaa); // Light grey
        const color3 = new THREE.Color(0x3355bb); // Darker blue

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * 2000 - 1000;
            const y = Math.random() * 2000 - 1000;
            const z = Math.random() * 2000 - 1000;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Assign colors (mix them up)
            let chosenColor;
            const randColor = Math.random();
            if (randColor < 0.5) {
                chosenColor = color1;
            } else if (randColor < 0.8) {
                chosenColor = color2;
            } else {
                chosenColor = color3;
            }
            colors[i * 3] = chosenColor.r;
            colors[i * 3 + 1] = chosenColor.g;
            colors[i * 3 + 2] = chosenColor.b;
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        particleMaterial = new THREE.PointsMaterial({
            size: 3,
            vertexColors: true, // Use colors defined in geometry
            // map: createParticleTexture(), // Optional: use a texture for softer particles
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.7,
            depthWrite: false // Helps with blending issues
        });

        particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        // Event Listeners
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        window.addEventListener('resize', onWindowResize, false);

        animate();
    }

    // Optional: For softer, rounder particles instead of squares
    function createParticleTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const context = canvas.getContext('2d');
        const gradient = context.createRadialGradient(
            canvas.width / 2, canvas.height / 2, 0,
            canvas.width / 2, canvas.height / 2, canvas.width / 2
        );
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
        gradient.addColorStop(0.8, 'rgba(255,255,255,0.1)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
        return new THREE.CanvasTexture(canvas);
    }

    function onDocumentMouseMove(event) {
        mouse.x = (event.clientX - windowHalfX);
        mouse.y = (event.clientY - windowHalfY);
    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        const time = Date.now() * 0.00005;

        // Subtle camera movement based on mouse
        camera.position.x += (mouse.x * 0.05 - camera.position.x) * 0.02;
        camera.position.y += (-mouse.y * 0.05 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        // Animate particles (e.g., slow rotation or individual movement)
        particles.rotation.x = time * 0.2;
        particles.rotation.y = time * 0.3;
        
        // If you want individual particle movement (more complex, can impact performance)
        const positions = particles.geometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            // Example: simple bobbing
            positions[i * 3 + 1] += Math.sin(time * 100 + i) * 0.1;
        }
        particles.geometry.attributes.position.needsUpdate = true;


        renderer.render(scene, camera);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThreeJS);
    } else {
        initThreeJS();
    }

})();