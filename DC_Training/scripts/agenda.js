var toggler = document.getElementsByClassName("caret");
var i;


// Function to recursively collapse all nested carets
function collapseNestedCarets(element) {
  var nestedCarets = element.querySelectorAll(".caret");
      nestedCarets.forEach(function(item) {
    var nested = item.parentElement.querySelector(".nested");
      if (nested) {
        nested.classList.remove("active");
        item.classList.remove("caret-down");
        collapseNestedCarets(nested);
      }
  });
}

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    // Toggle caret and nested element
    var nested = this.parentElement.querySelector(".nested");
    var isActive = nested.classList.contains("active");
    nested.classList.toggle("active", !isActive);
  this.classList.toggle("caret-down", !isActive);

  // If collapsing, collapse all nested carets
  if (!isActive) {
    collapseNestedCarets(nested);
  }
});
}