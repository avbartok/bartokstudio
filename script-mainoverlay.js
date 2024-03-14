const imageLinks = document.querySelectorAll('.image-link');

imageLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const overlay = link.querySelector('.image-overlay');
        overlay.style.opacity = '1';
    });

    link.addEventListener('mouseleave', () => {
        const overlay = link.querySelector('.image-overlay');
        overlay.style.opacity = '0';
    });
});
