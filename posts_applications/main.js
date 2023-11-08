"use strict";

const inputtext = document.getElementById("input");

const submitBtn = document.querySelector("button");
console.log(submitBtn);

const posts = document.querySelectorAll(".options");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault(); // this is used to stop the deafult action of forms that is to reload when ever it is submitted
  // prevent default will help to stop the instant reload of the text area space after button is submitted.s
  if (inputtext.value !== "") {
    console.log(inputtext.value);

    const newPost = `
    <div>
    <p>${inputtext.value}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;
    // posts.appendChild(newPost);
  } else {
    alert("Enter text in the post");
  }
  inputtext.value = "";
});

const deletePost = (e) => {
  console.log(this);
};

for (let i = 0; i < posts.length; i++) {
  posts[i].addEventListener("click", function (e) {
    console.log("post is clicked");
  });
}

// function insertPost(temp) {
//   const template = temp;
//   posts.appendChild(template);
// }
