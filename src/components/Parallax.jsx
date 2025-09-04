import { useEffect } from 'preact/hooks';

export default function Parallax() {

    useEffect(() => {
        const layers = [];
        const parallaxElements = document.getElementsByClassName("parallax");

        for (let i = 0; i < parallaxElements.length; i++) {
            layers.push({
                element: parallaxElements[i],
                speed: parseFloat(parallaxElements[i].getAttribute("data-speed"))
            });
        }

        let ticking = false;

        function updateParallax() {
            const scrollTop = window.pageYOffset;
            
            for (let i = 0; i < layers.length; i++) {
                const layer = layers[i];
                const yPos = -(scrollTop * layer.speed / 100);
                
                layer.element.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
                layer.element.style.display = "block";
            }
            
            ticking = false;
        }

        function handleScroll() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div class="keyart" id="parallax">
            {/* translateZ(0) for GPU acceleration */}
            <div class="keyart_layer parallax" id="keyart-0" data-speed="5" style="transform: translateZ(0);"></div>
            <div class="keyart_layer parallax" id="keyart-1" data-speed="11" style="transform: translateZ(0);"></div>
            <div class="keyart_layer parallax" id="keyart-2" data-speed="16" style="transform: translateZ(0);"></div>
            <div class="keyart_layer parallax" id="keyart-7" data-speed="20" style="transform: translateZ(0);"></div>
            <div class="keyart_layer parallax" id="keyart-3" data-speed="26" style="transform: translateZ(0);"></div>
            <div class="keyart_layer parallax" id="keyart-4" data-speed="36" style="transform: translateZ(0);"></div>
            <div class="keyart_layer parallax" id="keyart-5" data-speed="69" style="transform: translateZ(0);"></div>
            <div class="keyart_layer parallax" id="keyart-6" data-speed="100" style="transform: translateZ(0);"></div>
        </div>
    );
}