const audio = document.getElementById("audio");

// Recuperar el estado del audio desde localStorage
const savedAudioTime = localStorage.getItem("audioTime");
if (savedAudioTime) {
    audio.currentTime = parseFloat(savedAudioTime);
}

const savedPlayingState = localStorage.getItem("isPlaying");
if (savedPlayingState === "true") {
    audio.play();
}

// Guardar el tiempo actual del audio antes de cambiar de página
window.addEventListener("beforeunload", () => {
    localStorage.setItem("audioTime", audio.currentTime);
    localStorage.setItem("isPlaying", !audio.paused);
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

//menu js index 
const bars = document.querySelector('.bars');
const navMenu = document.querySelector('nav ul');
const menuLinks = document.querySelectorAll('nav ul li a');
const musicButton = document.querySelector('.music-container');

// Alternar la clase 'active' para mostrar u ocultar el menú al hacer clic en el botón
bars.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
});

// Cerrar el menú cuando se hace clic en un enlace
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Cerrar el menú cuando se hace clic en el botón de música
musicButton.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !bars.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Acordeón
// Acordeón mejorado
document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
        const parentItem = button.parentElement;

        // Cerrar cualquier panel abierto antes de abrir uno nuevo
        document.querySelectorAll(".accordion-item").forEach((item) => {
            if (item !== parentItem && item.classList.contains("active")) {
                item.classList.remove("active");
                item.querySelector(".accordion-button").style.display = "flex"; // Muestra el título nuevamente
            }
        });

        // Alternar la clase "active" para abrir/cerrar el acordeón
        parentItem.classList.toggle("active");

        // Ocultar el título cuando el panel está activo
        if (parentItem.classList.contains("active")) {
            button.style.display = "none";
        } else {
            button.style.display = "flex";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const checkVisibility = () => {
        fadeElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            // Si el elemento está en la ventana visible
            if (elementTop < window.innerHeight && elementBottom >= 0) {
                element.classList.add("visible");
            }
        });
    };

    // Ejecuta la función al cargar la página y al hacer scroll
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Verifica los elementos visibles al cargar la página
});