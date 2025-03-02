
  
  // Handle Post Form Submission
  document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
  
    const post = {
      id: Date.now(), // Unique ID for each post
      title,
      category,
      description,
      timestamp: new Date().toLocaleString(),
      likes: 0,
      dislikes: 0,
    };
  
    // Save the post to localStorage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  
    // Clear the form
    document.getElementById('postForm').reset();
  
    alert('Post submitted successfully!');
  });