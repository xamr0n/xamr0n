document.addEventListener("DOMContentLoaded", function() {
    // Function to check if a lesson is completed (mock implementation using localStorage)
    function isLessonCompleted(lessonNumber) {
      return localStorage.getItem(`lesson${lessonNumber}Completed`) === 'true';
    }
  
    // Update navigation links based on lesson completion
    function updateNavigation() {
      const lessonLinks = document.querySelectorAll('nav.socialbtns ul li a');
      lessonLinks.forEach(link => {
        const href = link.getAttribute('href');
        const lessonNumber = href.match(/\d+/)[0]; // Extract lesson number from URL
  
        if (isLessonCompleted(lessonNumber)) {
          link.style.pointerEvents = 'auto'; // Enable link
          link.style.opacity = '1'; // Make link fully visible
        } else {
          link.style.pointerEvents = 'none'; // Disable link
          link.style.opacity = '0.5'; // Make link semi-transparent
        }
      });
    }
  
    // Call updateNavigation function when DOM is loaded
    updateNavigation();
  });
  