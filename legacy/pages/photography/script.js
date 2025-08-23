document.addEventListener("DOMContentLoaded", function () {
    // ============ modal logic ============ //
    const openModalButtons = document.querySelectorAll('.open-modal-btn');

    // open modal
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modalId; // Get the ID from the data attribute
            const modal = document.getElementById(modalId); // Find the corresponding modal

            if (modal) {
                modal.style.display = 'flex'; // Show the modal
            }
        });
    });

    // close modal on close button click
    const closeButtons = document.querySelectorAll('.close-modal-btn'); // Assuming close buttons have this class

    closeButtons.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.modal'); // Find the parent modal
            if (modal) {
                modal.style.display = 'none'; // Hide the modal
            }
        });
    });

    // close modal on outside content click
    window.addEventListener('click', (event) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // ============ navbar logic ============ //
    // Get the current page path (e.g., "index.html", "portfolio.html")
    const currentPage = window.location.pathname.split("/").pop();

    // Loop through all navbar links
    document.querySelectorAll(".navbar a").forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});
