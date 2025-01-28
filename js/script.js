const audio = document.getElementById("audio");

// Recuperar el estado del audio desde localStorage
const savedAudioTime = localStorage.getItem("audioTime");
if (savedAudioTime) {
    audio.currentTime = parseFloat(savedAudioTime); // Configura el tiempo guardado
}

const savedPlayingState = localStorage.getItem("isPlaying");
if (savedPlayingState === "true") {
    audio.play();
}

// Guardar el tiempo actual del audio antes de cambiar de página
window.addEventListener("beforeunload", () => {
    localStorage.setItem("audioTime", audio.currentTime);
    localStorage.setItem("isPlaying", !audio.paused); // Guardar si está en reproducción
});

// Agregar funcionalidad al botón de reproducción
function toggleMusic() {
    if (audio.paused) {
        audio.play();
        localStorage.setItem("isPlaying", "true");
    } else {
        audio.pause();
        localStorage.setItem("isPlaying", "false");
    }
}


// Variables
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showNextSlide() {
    // Obtener la diapositiva actual y eliminar la clase 'active'
    const currentSlide = slides[currentIndex];
    currentSlide.classList.remove('active', 'next', 'previous');

    // Calcular el índice de la siguiente diapositiva
    currentIndex = (currentIndex + 1) % totalSlides;

    // Configurar las clases para la siguiente diapositiva
    const nextSlide = slides[currentIndex];
    nextSlide.classList.add('active');
}

// Llamar a la función para cambiar las imágenes cada 9 segundos
setInterval(showNextSlide, 9000);

// Inicializar el carrusel asegurándose de que la primera diapositiva esté activa
slides[currentIndex].classList.add('active');





//menu js index 

// Seleccionamos el botón de hamburguesa y el menú
const bars = document.querySelector('.bars');
const navMenu = document.querySelector('nav ul');

// Alternar la clase 'active' para mostrar u ocultar el menú
bars.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
