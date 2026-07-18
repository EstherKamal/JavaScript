// ==========================================
// Esther Kamal Portfolio Logic
// ==========================================

// Smooth scrolling for navigation elements
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Sticky Navbar Scroll Shadow Effect
const navbar = document.querySelector(".navbar");
if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// Global Document Intersection Fade In Animation Engine
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.10
});

document.querySelectorAll("section, .highlight, .portfolio-card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Dynamic Active Link Highlighting on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

if (sections.length && navLinks.length) {
    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 180;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
}

// Back To Top Action Interface Creation
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.className = "top-btn";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topBtn.classList.add("visible");
    } else {
        topBtn.classList.remove("visible");
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Academic Portfolio Card Isometric Hover Transform Engine
document.querySelectorAll(".portfolio-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / 25);
        const rotateY = ((rect.width / 2 - x) / 25);

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.style.mouseleave = "none";
    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

// Profile Photo Micro Floating Dynamics
const heroImage = document.querySelector(".hero-right img");
if (heroImage) {
    let direction = 1;
    let pos = 0;
    setInterval(() => {
        pos += 0.2 * direction;
        heroImage.style.transform = `translateY(${pos}px)`;

        if (pos > 8) direction = -1;
        if (pos < -8) direction = 1;
    }, 35);
}

// Automatically Update Footer Copyright Year
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

console.log("Scholarship Profile System Validated Successfully.");
