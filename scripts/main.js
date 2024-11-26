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
    includeHTML('.circle', 'components/circle.html');
    includeHTML('.navbar-container-main', 'components/navbar-desktop-main.html');
    includeHTML('.navbar-container', 'components/navbar-desktop.html');
    includeHTML('.footer-container', 'components/footer.html');
    includeHTML('.navbar-container-on-projekt', '../components/navbar-desktop-on-projekt.html');
    includeHTML('.footer-container', '../components/footer.html');
  });