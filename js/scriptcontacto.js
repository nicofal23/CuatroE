  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const telefono = document.getElementById('telefono').value;

    // Envía el correo usando EmailJS
    emailjs.send('service_y14q1fd', 'template_bcm02gk', {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        telefono: telefono,
    })
    .then(function(response) {
        // SweetAlert de éxito
        Swal.fire({
            title: '¡Mensaje enviado!',
            text: 'Gracias por contactarnos. Pronto nos pondremos en contacto contigo.',
            icon: 'success',
            iconHtml: '<i class="fas fa-headphones"></i>', // Ícono personalizado
            background: '#000', // Fondo oscuro
            color: '#00EAFF', // Texto en color neon
            confirmButtonColor: '#00EAFF', // Botón en color neon
            showClass: {
                popup: 'animate__animated animate__fadeInDown' // Animación de entrada
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp' // Animación de salida
            }
        });
        document.getElementById('contact-form').reset(); // Limpia el formulario
    }, function(error) {
        // SweetAlert de error
        Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.',
            icon: 'error',
            iconHtml: '<i class="fas fa-times"></i>', // Ícono de error
            background: '#000', // Fondo oscuro
            color: '#ff0000', // Texto en rojo
            confirmButtonColor: '#ff0000', // Botón en rojo
            showClass: {
                popup: 'animate__animated animate__shakeX' // Animación de error
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelector('.bars');
    const navMenu = document.querySelector('nav ul');
    const menuLinks = document.querySelectorAll('nav ul li a');
    const musicButton = document.querySelector('.music-container');

    if (!bars || !navMenu) {
        console.error("No se encontró el botón de hamburguesa o el menú de navegación.");
        return;
    }

    // Evento para abrir/cerrar el menú
    bars.addEventListener('click', function (e) {
        e.stopPropagation(); // Evita que el evento se propague al documento
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !bars.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Cerrar el menú si se hace clic en el botón de música
    if (musicButton) {
        musicButton.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    }
});
