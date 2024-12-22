const posts = [];
const rootElement = document.querySelector("#root");

function renderPosts() {
  let innerHtml = "";

  posts.forEach((post) => {
    innerHtml += `<div>
               <h1>${post.title}</h1>
               <p>${post.body}</p>
          </div>`;
  });

  return `<section class="postsWrapper">${innerHtml}</section>`;
}

const getPosts = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => resolve(data))
    .catch((err) => console.log(err));
});

getPosts.then((val) => {
  posts.push(...val);
  rootElement.innerHTML = renderPosts();
});
