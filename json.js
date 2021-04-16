const fs = require('fs')
const axios = require("axios");


const url = "https://jsonplaceholder.typicode.com/posts";

axios.get(url)
     .then(res => {

        // Convert the the https(Url) response gotten to a jason format or string
        const getData = JSON.stringify(res.data);

        // Writing the json date gotten into a new file called posts.jsn in a Directory called Result
        fs.writeFileSync('result/posts.json', getData, 
        // method to alert if  error does not occurs 
        function(err) {
            console.log("Api was written successfully!")
        })
        // Error has occured
        .catch((err) => {
            console.log(err)
        })
})


