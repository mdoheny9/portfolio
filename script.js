document.addEventListener("DOMContentLoaded", function () {
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