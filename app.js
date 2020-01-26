const posts = [
  { title: 'Post One.', body: 'This is post one.' },
  { title: 'Post Two.', body: 'This is post two.' }
];

function createPost(post) {
  // Create a promise
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      // Creating Error
      const error = false;
      if (!error) {
        resolve()
      } else {
        reject('Error:  Check code again!');
      }


      resolve();
    }, 2000);
  });




}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title} </li>`
    });

    document.body.innerHTML = output;

  }, 1000);


}


createPost({ title: 'Post Threee', body: "This is post three" }).then(getPosts).catch(function (err) {
  console.log(err);
});