
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

window.onload = function () {
  fetch("https://api.jsonbin.io/v3/b/672689e8e41b4d34e44d3a06", {
    method: 'GET',
    mode: 'cors', 
    headers: {
      'X-Access-Key': '$2a$10$BR57v2oIWdihLGRPZpCFlOQ/bB/uvpWau7XlhtJEEzM3s/CwbzLDC'
    }
  })
  .then((response) => response.json())
  .then(json => {
    console.log(json);
  })
}
