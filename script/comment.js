const loadComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComments(data));
};

const displayComments = (data) => {
  let i = 0;
  const commentContainer = document.getElementById("comments-container");
  data.forEach((data) => {
    i++;
    const { name, id } = data;
    if (i <= 20) {
      const commentDiv = document.createElement("div");
      commentDiv.innerHTML = `
      <p class="bg-success text-white mx-auto w-75" onClick="showComment(${id})">${name}</p>
      `;
      commentContainer.appendChild(commentDiv);
    }
  });
  //   console.log(data);
};

const showComment = (postId) => {
  const url = `https://jsonplaceholder.typicode.com/comments/${postId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayComment(data));
};
const displayComment = (data) => {
  const { id, name, body } = data;
  const commentContainer = document.getElementById("comment-container");
  commentContainer.innerHTML = "";
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("card");
  commentDiv.innerHTML = `
  <div class="card-body">
        <h5 class="card-title">${id}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
        <p class="card-text">${body}</p>
    </div>
  `;
  commentContainer.appendChild(commentDiv);
};

loadComments();
