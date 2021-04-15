const fs = require('fs')
const axios = require("axios");


const url = "https://jsonplaceholder.typicode.com/posts";

axios.get(url)
.then(response => {
 JSON.stringify(response.data);
 fs.writeFileSync('result/posts.json', JSON.stringify(response.data), 
 function(err) {
     console.log(err)
 })
 .catch(err => {
     console.log(err)
 })
})





// const resultJSON = JSON.stringify(response)
// fs.writeFileSync('result/posts.json', resultJSON)

