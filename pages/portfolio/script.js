// Get all buttons that open modals
const openModalButtons = document.querySelectorAll('.open-modal-btn');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.dataset.modalId; // Get the ID from the data attribute
        const modal = document.getElementById(modalId); // Find the corresponding modal

        if (modal) {
            modal.style.display = 'block'; // Show the modal
        }
    });
});

// Logic for closing modals (e.g., close button or click outside)
const closeButtons = document.querySelectorAll('.close-modal-btn'); // Assuming close buttons have this class

closeButtons.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal'); // Find the parent modal
        if (modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    });
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});