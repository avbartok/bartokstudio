document.addEventListener("DOMContentLoaded", function () {
    // List of background images
    const backgrounds = [
        "../assets/img/index-bg.png",
        "../assets/img/bg-2.png",
        "../assets/img/bg-3.png",
        "../assets/img/bg-4.png",
        "../assets/img/bg-5.png"
    ];

    const body = document.body;

    // Function to update the background based on mouse position
    function updateBackground(event) {
        const screenWidth = window.innerWidth;
        const regionWidth = screenWidth / 5; // Divide screen into 10 equal parts
        const mouseX = event.clientX;

        // Determine the region index (0-9)
        const regionIndex = Math.floor(mouseX / regionWidth);

        // Update the background image
        body.style.backgroundImage = `url('${backgrounds[regionIndex]}')`;
        body.style.transition = "background-image 0.5s ease-in-out"; // Smooth transition
    }

    // Add event listener for mouse movement
    window.addEventListener("mousemove", updateBackground);
});