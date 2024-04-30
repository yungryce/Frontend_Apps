const uri = 'https://jsonplaceholder.typicode.com/posts'
const xhr = new XMLHttpRequest()
xhr.open("GET", uri, true)
xhr.send()
let agege = document.getElementById('button')
agege.addEventListener('click', gege => {
    console.log(gege)
})


// async function fetchData() {
//     const uri = 'https://jsonplaceholder.typicode.com/posts';
  
//     try {
//       const response = await fetch(uri);
//       const data = await response.json();
//       window.uriData = data; // save data in a global variable
//       console.log(data); // log data to the console
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   fetchData(); 


// fetch('https://jsonplaceholder.typicode.com/posts/')
//     .then(data => data.json())
//     .then(response => console.log(response))
//     .catch(err => console.log('erroror'))