// Function to include external HTML
function includeHTML(selector, file) {
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Could not fetch ${file}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch(error => console.error('Error loading HTML:', error));
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    // Get the INFO button and the popup
    const infoButton = document.getElementById('info-button');
    const popup = document.getElementById('popup');

    // Check if elements are being found
    console.log('INFO button:', infoButton);
    console.log('Popup:', popup);

    if (infoButton && popup) {
        // Add click event to the INFO button to toggle the popup
        infoButton.addEventListener('click', () => {
            console.log('INFO button clicked');
            // Toggle the display property of the popup
            popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex';
        });

        // Close popup when clicking outside the content
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    } else {
        console.error('INFO button or Popup not found');
    }
});