// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });

        }

    });

});

// ======================================
// HERO + ABOUT IMAGE
// MOUSE FOLLOW EFFECT
// ======================================

const mouseItems =
    document.querySelectorAll(".mouse-follow");

mouseItems.forEach(item => {

    item.addEventListener("mousemove", (e) => {

        const rect =
            item.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateY =
            (x - centerX) / 25;

        const rotateX =
            (centerY - y) / 25;

        item.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});

// ======================================
// TYPING EFFECT
// ======================================

const typingElement =
    document.querySelector(".typing-text");

const texts = [
    "Creative Graphic Designer",
    "Brand Identity Specialist",
    "Social Media Designer",
    "Professional Visual Creator"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) return;

    const currentText =
        texts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (
                textIndex >= texts.length
            ) {
                textIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );

}

typingEffect();// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const observer = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},
{
    threshold: 0.15
});

document.querySelectorAll(
".service-card, .skill-card, .portfolio-item, .review-card, .stat-box"
).forEach(item => {

    item.classList.add("hidden");
    observer.observe(item);

});

// ======================================
// COUNTER ANIMATION
// ======================================

const counters =
document.querySelectorAll(".stat-box h3");

const counterObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target =
        parseInt(counter.innerText);

        let count = 0;

        const updateCounter = () => {

            const increment =
            target / 60;

            if (count < target) {

                count += increment;

                counter.innerText =
                Math.ceil(count) + "+";

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.innerText =
                target + "+";

            }

        };

        updateCounter();

    });

});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ======================================
// ACTIVE NAVIGATION LINK
// ======================================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove(
            "active-link"
        );

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add(
                "active-link"
            );

        }

    });

});

// ======================================
// PORTFOLIO LIGHTBOX
// ======================================

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

const portfolioImages =
document.querySelectorAll(
".portfolio-item img"
);

portfolioImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        const img =
        document.createElement("img");

        img.src = image.src;

        while (lightbox.firstChild) {

            lightbox.removeChild(
                lightbox.firstChild
            );

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// ======================================
// PARALLAX STAR EFFECT
// ======================================

window.addEventListener("scroll", () => {

    const stars =
    document.querySelector(".stars");

    if (!stars) return;

    stars.style.transform =
    `translateY(${window.scrollY * 0.15}px)`;

});

// ======================================
// PAGE LOAD ANIMATION
// ======================================

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );

});

// ======================================
// PREMIUM HOVER GLOW EFFECT
// ======================================

document.querySelectorAll(
".service-card, .skill-card, .review-card"
).forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            card.style.background =
            `radial-gradient(
                circle at ${x}px ${y}px,
                rgba(0,229,255,0.18),
                #111 60%
            )`;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background =
            "#111";

        }
    );

});

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log(
"%c Spark Root Portfolio Loaded Successfully",
"color:#00e5ff;font-size:18px;font-weight:bold;"
);