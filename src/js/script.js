
var clicked = false; // checker if clicked

// Function to toggle the dropdown menu visibility
function toggleDropdown() {

  if (!clicked){
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show");
    clicked = true
  }else{
    var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
      clicked = false;
    }
}
  

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  
}
