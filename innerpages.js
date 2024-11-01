// Initialize GSAP ScrollSmoother
document.addEventListener("DOMContentLoaded", function () {
    // Check if GSAP and ScrollSmoother are loaded
    if (typeof gsap !== 'undefined' && typeof ScrollSmoother !== 'undefined') {
        // Create a smoother instance
        ScrollSmoother.create({
            wrapper: "#scrollsmoother-container", // ID of the container
            content: "main", // Target content (main content area)
            smooth: 1.5, // Adjust smoothness, higher is smoother (try values like 0.8, 1, 1.5)
            effects: true // Enables effects like parallax on elements inside the smoother
        });
    } else {
        console.warn("GSAP or ScrollSmoother is not loaded.");
    }
});
