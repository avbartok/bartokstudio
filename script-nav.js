document.addEventListener("DOMContentLoaded", function () {
    const mobileNavIcon = document.querySelector('.mobile-nav-icon');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const overlayContent = `
        <nav>
            <ul>
                <li><a href="pages/portfolio.html">Portfolio</a></li>
                <li><a href="pages/studio.html">Studio</a></li>
                <li><a href="pages/workshop.html">Workshop</a></li>
                <li><a href="pages/kontakt.html">Kontakt</a></li>
        </div>
            </ul>
            <div class="overlay-close-icon">
                <img src="assets/icons/close-line.svg" alt="Close Icon">
            </div>
        </nav>
    `;
    overlay.innerHTML = overlayContent;
    document.body.appendChild(overlay);

    mobileNavIcon.addEventListener('click', function () {
        overlay.classList.toggle('active');
    });

    const overlayCloseIcon = document.querySelector('.overlay-close-icon');
    overlayCloseIcon.addEventListener('click', function () {
        overlay.classList.remove('active');
    });
});
