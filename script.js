const homeButton = document.getElementById("home");
const informationButton = document.getElementById("information");
const contactButton = document.getElementById("contact");
const menuIcon = document.getElementById('menu-icon');
const header = document.querySelector("header");
const mainSection = document.querySelector("main");

function scrollToSection(sectionClassName) {
    const section = document.querySelector("." + sectionClassName);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error("Section non trouvée : " + sectionClassName);
    }
}

homeButton.addEventListener("click", () => scrollToSection("section1"));
informationButton.addEventListener("click", () => scrollToSection("information"));
contactButton.addEventListener("click", () => scrollToSection("contactform"));

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.style.position = "fixed";
        header.style.backgroundColor = "rgb(24 23 23)";
        mainSection.style.marginTop = "78px";
    } else {
        header.style.position = "relative";
        header.style.backgroundColor = "rgb(24 23 23)";
        mainSection.style.marginTop = "0px";
    }
});

menuIcon.addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.link').classList.toggle('active');
});

document.querySelectorAll('.link a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('active');
        document.querySelector('.link').classList.remove('active');
    });
});
