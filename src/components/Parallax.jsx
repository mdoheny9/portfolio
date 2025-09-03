import { useEffect } from 'preact/hooks';

export default function Parallax() {

    useEffect(() => {
        function castParallax() {
			window.addEventListener("scroll", function () {
				var top = this.pageYOffset;
				var layers = document.getElementsByClassName("parallax");

				for (var i = 0; i < layers.length; i++) {
					var layer = layers[i];
					var speed = layer.getAttribute("data-speed");
					var yPos = -(top * speed / 100);

					layer.style.transform = "translate3d(0px, " + yPos + "px, 0px)";
					layer.style.display = "block";
				}
			});
	}
	castParallax();
    }, []);

  return (
    <div class = "keyart" id = "parallax">
        <div class = "keyart_layer parallax" id= "keyart-0" data-speed = "5"></div>
        <div class = "keyart_layer parallax" id= "keyart-1" data-speed = "11"></div>
        <div class = "keyart_layer parallax" id= "keyart-2" data-speed = "16"></div>
        <div class = "keyart_layer parallax" id= "keyart-7" data-speed = "20"></div>
        <div class = "keyart_layer parallax" id= "keyart-3" data-speed = "26"></div>
        <div class = "keyart_layer parallax" id= "keyart-4" data-speed = "36"></div>
        <div class = "keyart_layer parallax" id= "keyart-5" data-speed = "69"></div>
        <div class = "keyart_layer parallax" id= "keyart-6" data-speed = "100"></div>
    </div> 
  );
}