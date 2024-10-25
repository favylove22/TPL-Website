document.getElementById("homeLink").addEventListener("click", function() {
    scrollToSection("home");
});

document.getElementById("whatLink").addEventListener("click", function() {
    scrollToSection("what");
});

document.getElementById("whoLink").addEventListener("click", function() {
    scrollToSection("who");
});

document.getElementById("contactLink").addEventListener("click", function() {
    scrollToSection("contact");
});

document.getElementById("readMore").addEventListener("click", function() {
    alert("More details about Tessco Power Limited coming soon!");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}
