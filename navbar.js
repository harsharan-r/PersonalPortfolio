document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop();
    // console.log("Current page:", currentPage);

    // Get all the nav links
    const navLinks = document.querySelectorAll(".sticky-navbar a");

    // Select the navbar element
    const navbar = document.querySelector(".sticky-navbar");
    // console.log("Navbar element:", navbar);

    const otherLinks = document.querySelectorAll(".tooltipText");

    // Loop through each link
    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        // console.log("Checking link href:", linkHref);

        // Check if the link's href matches the current page
        if (linkHref === currentPage) {
            // console.log("Adding 'active' class to:", link.firstChild);
            // Add the 'active' class to the parent <li> element
            link.firstChild.classList.add("active");
        }
    });

    console.log("Checking link href:", otherLinks);
    // Handle navbar animation
    if (currentPage === 'index.html') {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 10) {
                navbar.style.transform = "translateX(-50%) translateY(0)"; // Slide in from the bottom
                navbar.style.opacity = "1"; // Fade in
            } else {
                navbar.style.transform = "translateX(-50%) translateY(100%)"; // Slide out to the bottom
                navbar.style.opacity = "0"; // Fade out
            }
        });
    } else {
        setTimeout(function() {
            navbar.style.transform = "translateX(-50%) translateY(0)";
            navbar.style.opacity = "1";
        }, 100);
    }

});
