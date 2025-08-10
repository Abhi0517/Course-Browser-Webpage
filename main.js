window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const maxScroll = 200;
    let opacity = 1 - (window.scrollY / maxScroll);
    opacity = Math.max(0.8, Math.min(1, opacity)); // Clamp between 0.7 and 1
    navbar.style.background = `rgba(255,255,255,${opacity})`;
});