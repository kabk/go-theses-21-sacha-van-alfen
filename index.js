const toggleBtn = document.getElementById("toggle");
const navMenu = document.getElementById("navMenu");
const links = document.getElementsByClassName("navLink");

let navBarOpen = false;

toggleBtn.addEventListener("click", function () {
  if (!navBarOpen) {
    navMenu.classList.remove("close");
    navMenu.classList.add("open");

    toggleBtn.classList.remove("close");
    toggleBtn.classList.add("open");

    navBarOpen = true;
  } else if (navBarOpen) {
    navMenu.classList.remove("open");
    navMenu.classList.add("close");

    toggleBtn.classList.remove("open");
    toggleBtn.classList.add("close");

    navBarOpen = false;
  }
});

/* Credit to: Elnatan vazana: https://stackoverflow.com/users/12740967/elnatan-vazana */
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    navMenu.classList.remove("open");
    navMenu.classList.add("close");

    toggleBtn.classList.remove("open");
    toggleBtn.classList.add("close");

    navBarOpen = false;
  });
}



$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
