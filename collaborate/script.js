  
  // Function to display posts
  function displayPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Clear the container
  
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    posts.forEach((post, index) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p><strong>Category:</strong> ${post.category}</p>
        <p>${post.description}</p>
        <p><em>Posted on: ${post.timestamp}</em></p>
        <div class="like-dislike">
          <button onclick="likePost(${index})">👍 <span>${post.likes || 0}</span></button>
          <button onclick="dislikePost(${index})">👎 <span>${post.dislikes || 0}</span></button>
        </div>
        <button onclick="deletePost(${index})" class="delete-btn">Delete</button>
      `;
      postsContainer.appendChild(postElement);
    });
  }
  
  // Function to like a post
  function likePost(index) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    if (!posts[index].likes) posts[index].likes = 0; // Initialize likes if not present
    posts[index].likes++; // Increment likes
    localStorage.setItem('posts', JSON.stringify(posts)); // Save to localStorage
    displayPosts(); // Refresh the posts display
  }
  
  // Function to dislike a post
  function dislikePost(index) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    if (!posts[index].dislikes) posts[index].dislikes = 0; // Initialize dislikes if not present
    posts[index].dislikes++; // Increment dislikes
    localStorage.setItem('posts', JSON.stringify(posts)); // Save to localStorage
    displayPosts(); // Refresh the posts display
  }
  
  // Function to delete a post
  function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(index, 1); // Remove the post at the specified index
    localStorage.setItem('posts', JSON.stringify(posts)); // Save to localStorage
    displayPosts(); // Refresh the posts display
  }
  
  // Display posts when the page loads
  displayPosts();