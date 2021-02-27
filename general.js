// Back to top/bottom animation
var scroll_to_position = {
    // Keep track of starting position when animation starts
	starting_position: 0,
    // Scroll to
	start: function(margin) {
        window.scroll({top: margin, left: 0, behavior: 'smooth'});
	},
    // Scroll to top
	back_to_top: function(margin) {
		if(margin === undefined) { // Need this because of IE
			margin = 0;
		}
		scroll_to_position.starting_position = window.scrollY;
		scroll_to_position.start(margin);
	},
    // Scroll back to bottom
	back_to_bottom: function(margin) {
		if(margin === undefined) { // Need this because of IE
			margin = 0;
		}
		// When you call scroll_to_position.back_to_top method starting position is saved in scroll_to_position.starting_position, it can be used to go back to that point
		scroll_to_position.start((scroll_to_position.starting_position + margin));
	}
}

// Add .back-to-top and -back-to-bottom classes to elements that need to trigger those actions
document.addEventListener('click', function (event) {
	if (event.target.matches('.back-to-top')) {
        // Go to top
        scroll_to_position.back_to_top();
    }
    if(event.target.matches('.back-to-bottom')) {
        // Go back to bottom
        scroll_to_position.back_to_bottom();
    }
}, false);