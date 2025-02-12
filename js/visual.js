document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".scroll-animation");

    const checkVisibility = () => {
        scrollElements.forEach((element) => {
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