// Variables needed to check if user is on the posts page
let windowURL = window.document.URL.split('/');
let fileName = windowURL[windowURL.length-1].substring(0, 10)

// fetch data from online source
/*
window.onload = function () {
  if (fileName == "index.html") {
    fetch("https://api.jsonbin.io/v3/b/672689e8e41b4d34e44d3a06", {
      method: 'GET',
      mode: 'cors', 
      headers: {
        'X-Access-Key': '$2a$10$BR57v2oIWdihLGRPZpCFlOQ/bB/uvpWau7XlhtJEEzM3s/CwbzLDC'
      }
    })
    .then((response) => response.json())
    .then(json => {
      let postArray = json['record']['posts'];
      let main = document.querySelector("main");
      main.className = "common";
      for (let i = 0; i < postArray.length; i++) {
        console.log(postArray[i]);
        let post = postArray[i];
        let newArticle = document.createElement("article");
        let newHeading = document.createElement("h2");
        let newParagraph = document.createElement("p");
        let newImage = document.createElement("img");

        newHeading.innerText = post.title;
        newParagraph.innerText = post.text;
        
        newArticle.appendChild(newHeading);
        if (post.imagePath != null) {
          newImage.src = post.imagePath;
          newArticle.appendChild(newImage);
        }
        newArticle.appendChild(newParagraph);
        main.appendChild(newArticle);
      }
    })
    .catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
    })
    .finally(() => {
        let footer = document.createElement("footer");
        date = new Date().toLocaleString()
        footer.innerText = date;
        document.body.appendChild(footer);
        })
  }
}
*/

// fetch data from /res/json/posts.json
window.onload = function () {
  if (fileName == "index.html") {
    fetch("../res/json/posts.json")
    .then((response) => response.json())
    .then(json => {
      let postArray = json['posts'];
      let main = document.querySelector("main");
      main.className = "common";
      for (let i = 0; i < postArray.length; i++) {
        console.log(postArray[i]);
        let post = postArray[i];
        let newArticle = document.createElement("article");
        let newHeading = document.createElement("h2");
        let newParagraph = document.createElement("p");
        let newImage = document.createElement("img");

        newHeading.innerText = post.title;
        newParagraph.innerText = post.text;
        
        newArticle.appendChild(newHeading);
        if (post.imagePath != null) {
          newImage.src = post.imagePath;
          newArticle.appendChild(newImage);
        }
        newArticle.appendChild(newParagraph);
        main.appendChild(newArticle);
      }
    })
    .catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
    })
    .finally(() => {
        let footer = document.createElement("footer");
        date = new Date().toLocaleString()
        footer.innerText = date;
        document.body.appendChild(footer);
        })
  }
}


// Function to toggle the dropdown menu visibility
function toggleDropdown(event) {
  event.preventDefault(); // Prevents the default anchor behavior

  const dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("show"); // Toggles visibility
}

// Event listener for the login button
document.querySelector('.login_button').addEventListener('click', toggleDropdown);