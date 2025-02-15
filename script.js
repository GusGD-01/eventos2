document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    // Cambiar color de Navbar al hacer scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Scroll suave al hacer clic en los enlaces del navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Animaciones de entrada para las secciones
    const sections = document.querySelectorAll(".container, .hero-content");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.observe(section);
    });

    // Efecto de hover en las tarjetas de speakers
    const speakerCards = document.querySelectorAll("#speakers .card");
    speakerCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

    // Efecto de flotación en las tarjetas de detalles
    const eventCards = document.querySelectorAll(".event-card");
    eventCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.animation = "none";
        });
        card.addEventListener("mouseleave", () => {
            card.style.animation = "float 3s infinite";
        });
    });
});