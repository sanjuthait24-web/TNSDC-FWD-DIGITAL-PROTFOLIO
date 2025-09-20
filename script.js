// Toggle mobile menu

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

// Highlight active menu on scroll

const sections = document.querySelectorAll("section");

const menuLinks = document.querySelectorAll("#nav-links li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 60) {

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});

// Contact form validation

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (name && email && message) {

        formStatus.textContent = "✔ Message sent successfully!";

        formStatus.style.color = "green";

        contactForm.reset();

    } else {

        formStatus.textContent = "✖ Please fill in all fields.";

        formStatus.style.color = "red";

    }

});