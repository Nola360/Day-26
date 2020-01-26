// FETCH API
// Button 1
document.getElementById('button1').addEventListener('click', getText);
// Button 2
document.getElementById('button2').addEventListener('click', getJson);
// Button 3
document.getElementById('button3').addEventListener('click', getExternal);


// Get Local Text File Data
function getText() {
  fetch('test.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get Local Json Data

function getExternal() {
  fetch('https://api.github.com/users')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = ''
      data.forEach(function (user, id) {
        output += `<li>${user.login}</li>
        <li>${user.id}</li>
        `
      });
      // Displays data on webpage
      document.getElementById('output').innerHTML = output;

    })
    .catch(function (err) {
      console.log(err);
    });
}


function getJson() {
  fetch('post.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = ''
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`
      });
      // Displays data on webpage
      document.getElementById('output').innerHTML = output;

    })
    .catch(function (err) {
      console.log(err);
    });
}



