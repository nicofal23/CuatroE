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






//menu js index 
// Seleccionamos el botón de hamburguesa, el menú, los enlaces dentro del menú y el botón de música
const bars = document.querySelector('.bars');
const navMenu = document.querySelector('nav ul');
const menuLinks = document.querySelectorAll('nav ul li a');
const musicButton = document.querySelector('.music-container');

// Alternar la clase 'active' para mostrar u ocultar el menú al hacer clic en el botón
bars.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic se propague al documento
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


document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
      // Cerrar cualquier panel abierto antes de abrir uno nuevo
      document.querySelectorAll(".accordion-item").forEach((item) => {
        if (item !== button.parentElement) {
          item.classList.remove("active");
        }
      });
  
      // Alternar la clase "active" para abrir/cerrar el acordeón
      button.parentElement.classList.toggle("active");
    });
  });
  