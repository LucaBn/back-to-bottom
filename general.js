// Back to top/bottom animation
const scrollToPosition = {
  // Keep track of starting position when animation starts
  startingPosition: 0,

  // Scroll to
  start: (margin) => {
    window.scroll({ top: margin, left: 0, behavior: "smooth" });
  },

  // Scroll to top
  backToTop: (margin = 0) => {
    scrollToPosition.startingPosition = window.scrollY;
    scrollToPosition.start(margin);
  },

  // Scroll back to bottom
  backToBottom: (margin = 0) => {
    // When you call scrollToPosition.backToTop method starting position is saved in scrollToPosition.startingPosition, it can be used to go back to that point
    scrollToPosition.start(scrollToPosition.startingPosition + margin);
  },
};

// Add .back-to-top and .back-to-bottom classes to elements that need to trigger those actions
document.addEventListener(
  "click",
  (event) => {
    if (event.target.matches(".back-to-top")) {
      // Go to top
      scrollToPosition.backToTop();
    }

    if (event.target.matches(".back-to-bottom")) {
      // Go back to bottom
      scrollToPosition.backToBottom();
    }
  },
  false
);
