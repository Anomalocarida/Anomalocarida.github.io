// Get all navigation buttons
const buttons = document.querySelectorAll('.nav-btn');

// Function to remove the active class from all buttons
function clearActiveButtons() {
    buttons.forEach(button => button.classList.remove('active'));
}

// Function to show the selected section and highlight the button
function showSection(sectionId, buttonId) {
    // Hide all sections
    document.querySelectorAll('main > div').forEach(div => div.classList.add('hidden'));

    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');

    // Clear active buttons and highlight the selected one
    clearActiveButtons();
    document.getElementById(buttonId).classList.add('active');
}

// Event listeners for navigation buttons
document.getElementById('homeToggle').addEventListener('click', function () {
    showSection('homePage', 'homeToggle');
});

document.getElementById('gameToggle').addEventListener('click', function () {
    showSection('gameProjects', 'gameToggle');
});

document.getElementById('websiteToggle').addEventListener('click', function () {
    showSection('websiteProjects', 'websiteToggle');
});
