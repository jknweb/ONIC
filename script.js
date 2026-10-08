document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        const setMenuOpen = (isOpen) => {
            mainNav.classList.toggle("active", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
        };

        menuToggle.addEventListener("click", () => {
            setMenuOpen(!mainNav.classList.contains("active"));
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && mainNav.classList.contains("active")) {
                setMenuOpen(false);
                menuToggle.focus();
            }
        });

    }


    // Fermer le menu mobile après clic
    document.querySelectorAll(".main-nav a").forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 850) {
                mainNav.classList.remove("active");
                menuToggle?.setAttribute("aria-expanded", "false");
                menuToggle?.setAttribute("aria-label", "Ouvrir le menu");
            }

        });

    });


    // Gestion simple du formulaire
    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", (event) => {

            event.preventDefault();

            alert(
                "Merci pour votre message. " +
                "Le formulaire sera connecté au système de messagerie lors de l'intégration WordPress."
            );

        });

    }

});