document.addEventListener("DOMContentLoaded", function () {
    var pages = document.querySelectorAll(".page-content");
    var pageIndicator = document.getElementById("page-indicator");
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    var topBtn = document.getElementById("topBtn");
    var currentPage = 0;
    var totalPages = pages.length;
    // Update page display
    function updatePageDisplay() {
        // Hide all pages
        pages.forEach(function (page) { return page.classList.remove("active"); });
        // Show current page
        pages[currentPage].classList.add("active");
        // Update page indicator
        pageIndicator.innerHTML = "<p><span style=\"font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans', Verdana, sans-serif\"><strong>Page ".concat(currentPage + 1, " of ").concat(totalPages, "</strong></span></p>");
        // Update button states
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === totalPages - 1;
        // Scroll to top when changing pages
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Navigation event listeners
    prevBtn.addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            updatePageDisplay();
        }
    });
    nextBtn.addEventListener("click", function () {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updatePageDisplay();
        }
    });
    // Back to top button
    topBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    // Show/hide back to top button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            topBtn.style.display = "block";
        }
        else {
            topBtn.style.display = "none";
        }
    });
    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft" && currentPage > 0) {
            currentPage--;
            updatePageDisplay();
        }
        else if (e.key === "ArrowRight" && currentPage < totalPages - 1) {
            currentPage++;
            updatePageDisplay();
        }
    });
    // Initialize page display
    updatePageDisplay();
});
//# sourceMappingURL=PageDisplay.js.map
