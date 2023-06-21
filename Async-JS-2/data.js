//Async-await Fetch API
// async function fetchPosts() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();
//     let output = '';
//     posts.forEach(post => output += `<h3>${post.title}</h3><p>${post.body}</p>`);
//     document.body.innerHTML = output;
// }

// fetchPosts()

//Async-await then...catch
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        let output = '';
        posts.forEach(post => output += `<h3>${post.title}</h3><p>${post.body}</p>`);
        document.body.innerHTML = output;
    })
    .catch(err => document.body.innerHTML = `${err}`)
  