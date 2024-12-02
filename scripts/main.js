// Function to include external HTML with a callback
function includeHTML(selector, file, callback) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Could not fetch ${file}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
      if (callback) callback(); // Trigger callback after HTML is loaded
    })
    .catch(error => console.error('Error loading HTML:', error));
}

// Load navbar and footer dynamically
document.addEventListener('DOMContentLoaded', () => {
  includeHTML('.circle', 'components/circle.html');
  includeHTML('.navbar-container-main', 'components/navbar-desktop-main.html');
  includeHTML('.navbar-container', 'components/navbar-desktop.html');
  includeHTML('.footer-container', 'components/footer.html');
  includeHTML('.navbar-container-on-projekt', '../components/navbar-desktop-on-projekt.html');
  
  // Load mobile navbar and add event listeners
  includeHTML('.navbar-container-mobile', '../components/navbar-mobile.html', () => {
    // Attach event listeners after the navbar is loaded
    const infoButton = document.getElementById('infoButton');
    const backButton = document.getElementById('backButton');
    const overlay = document.getElementById('overlay');

    if (infoButton && backButton && overlay) {
      infoButton.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.style.display = 'block';
      });

      backButton.addEventListener('click', () => {
        overlay.style.display = 'none';
      });
    }
  });

  includeHTML('.navbar-container-mobile-on-project', '../components/navbar-mobile-on-project.html', () => {
    // Attach event listeners after the navbar is loaded
    const infoButton = document.getElementById('infoButton');
    const backButton = document.getElementById('backButton');
    const overlay = document.getElementById('overlay');

    if (infoButton && backButton && overlay) {
      infoButton.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.style.display = 'block';
      });

      backButton.addEventListener('click', () => {
        overlay.style.display = 'none';
      });
    }
  });

  
  includeHTML('.footer-container', '../components/footer.html');
});