// Variables needed to check if user is on the posts page
let windowURL = window.document.URL.split('/');
let fileName = windowURL[windowURL.length-1].substring(0, 10)

// fetch data from /res/json/posts.json or online source
window.onload = function () {
  if (fileName == "index.html" || fileName == "") {
    
    // UNCOMMENT to fetch from online source
    /*
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
      // END of online fetch part
    */
    
    // UNCOMMENT to fetch from local file

     fetch("./res/json/posts.json")
    .then((response) => response.json())
    .then(json => {
      let postArray = json['posts'];
      // END of local fetch part
      
      let main = document.querySelector("main");
      main.className = "common";
      for (let i = 0; i < postArray.length; i++) {
        console.log(postArray[i]);
        let post = postArray[i];
      
          // Main body
          let postWrapper = document.createElement("div");
          postWrapper.className = "post-wrapper";
      
          let newArticle = document.createElement("article");
      
          let newHeading = document.createElement("h2");
          newHeading.innerText = post.title;
          newArticle.appendChild(newHeading);
      
          // post author and createTime
          let authorTimeDiv = document.createElement("div");
          if (post.userLogo != null) {
            let userImage = document.createElement("img");
            userImage.className = "userIcon"
            userImage.src = post.userLogo;
            postWrapper.appendChild(userImage);
          }
          authorTimeDiv.className = "author-time";
          authorTimeDiv.innerText = `By ${post.author} on ${post.createTime}`;
          newArticle.appendChild(authorTimeDiv);

          // add post image 
          let newImage = document.createElement("img");
          if (post.imagePath != null) {
              newImage.src = post.imagePath;
              newArticle.appendChild(newImage);
          }
      
          // add post paragraph 
          let newParagraph = document.createElement("p");
          newParagraph.innerText = post.text;
          newArticle.appendChild(newParagraph);
      
          postWrapper.appendChild(newArticle);

          // add like button
          let likeButtonContainer = document.createElement("button") // make the image clickable
          let likeButton = document.createElement("img");
          likeButtonContainer.className = "like_button";
          likeButton.src = "./res/images/like_button.png"
          likeButtonContainer.appendChild(likeButton)
          postWrapper.appendChild(likeButtonContainer);

          likeButtonContainer.addEventListener("click", function() { // like button test function
            console.log("Like button clicked!");
          });

          main.appendChild(postWrapper);  
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
