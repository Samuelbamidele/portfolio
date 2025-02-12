const dynamicText = document.getElementById("dynamic-text");
const roles = ["Freelancer", "Developer", "Technician"];
let currentRoleIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[currentRoleIndex];
    if (isDeleting) {
        // Remove one letter at a time
        dynamicText.textContent = currentRole.slice(0, letterIndex--);
        if (letterIndex < 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to next role
        }
    } else {
        // Add one letter at a time
        dynamicText.textContent = currentRole.slice(0, ++letterIndex);
        if (letterIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Pause before deleting
            return;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// Start the typing effect
typeEffect();



document.addEventListener('DOMContentLoaded', function() {
    // Get all blog cards as an array
    const posts = Array.from(document.querySelectorAll('.blog-card'));
    const itemsPerPage = 2;   // Number of posts to display per page
    let currentPage = 0;      // Start with the first page
    const totalPages = Math.ceil(posts.length / itemsPerPage);

    // Function to display posts for a given page index
    function showPage(page) {
        // Hide all posts
        posts.forEach(post => post.style.display = 'none');

        // Calculate the start and end indexes for the current page
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        posts.slice(start, end).forEach(post => {
            post.style.display = 'block';
        });

        // Optionally, disable buttons if we're at the beginning or end
        prevBtn.disabled = (currentPage === 0);
        nextBtn.disabled = (currentPage === totalPages - 1);
    }

    // Get the buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Initially display the first page
    showPage(currentPage);

    // Next button: Show next set of posts if available
    nextBtn.addEventListener('click', function() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Previous button: Show previous set of posts if available
    prevBtn.addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Gather all portfolio items into an array
    const portfolioItems = Array.from(document.querySelectorAll('.portfolio-item'));
    const itemsPerPage = 2;  // Number of portfolio items to show per page
    let currentPage = 0;     // Start at the first page
    const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

    // Function to show portfolio items for the current page
    function showPortfolioPage(page) {
        // Hide all portfolio items first
        portfolioItems.forEach(item => item.style.display = 'none');

        // Calculate start and end indexes
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        // Display only the items for the current page
        portfolioItems.slice(start, end).forEach(item => {
            item.style.display = 'block';
        });

        // Disable Previous button if on the first page
        prevPortfolioBtn.disabled = (page === 0);
        // Disable Next button if on the last page
        nextPortfolioBtn.disabled = (page === totalPages - 1);
    }

    // Get the pagination buttons
    const prevPortfolioBtn = document.getElementById('prev-portfolio');
    const nextPortfolioBtn = document.getElementById('next-portfolio');

    // Initially display the first page
    showPortfolioPage(currentPage);

    // Event listener for the Next button
    nextPortfolioBtn.addEventListener('click', function() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            showPortfolioPage(currentPage);
        }
    });

    // Event listener for the Previous button
    prevPortfolioBtn.addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--;
            showPortfolioPage(currentPage);
        }
    });
});
