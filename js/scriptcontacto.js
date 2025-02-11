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