// Get all project elements
const projects = document.querySelectorAll('.image-link');

// Function to show projects of a specific type
function showProjectsOfType(type) {
    projects.forEach(project => {
        const projectType = project.querySelector('.project-type').textContent;
        if (projectType === type || type === 'all') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Event listener for project type filters
const projectTypeFilters = document.querySelectorAll('.project-type-filter');
projectTypeFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        const type = filter.dataset.type;
        showProjectsOfType(type);
    });
});
