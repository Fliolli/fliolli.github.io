const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

if (burger !== null) {
    burger.addEventListener("click", () => {
        if (mobileMenu !== null) {
            mobileMenu.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        }
    });
}

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        if (mobileMenu !== null) {
            mobileMenu.classList.remove("active");
            document.body.classList.remove("menu-open");
        }
    });
});

const faders = document.querySelectorAll(".fade-in");

if (faders !== null) {
    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.3 });

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}