const express = require('express');

const app = express();

//

// now we can create routes 
app.get('/',(req,res) => {
    res.send('This is our home page')
})
app.get('/post',(req,res) => {
    res.send('This is our post page')
})
// to start listening to the server specify the port
app.listen(3000);
