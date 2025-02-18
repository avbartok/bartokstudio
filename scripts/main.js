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
  
  // Load navbar and footer dynamically
  document.addEventListener('DOMContentLoaded', () => {
    includeHTML('.navbar-container-start', 'components/navbar-start.html');

    includeHTML('.navbar-container-main', 'components/navbar-main.html');
    includeHTML('.navbar-container-main', '../components/navbar-main-project.html');

    includeHTML('.navbar-container-mobile-close', '../components/navbar-mobile-close.html');
  });