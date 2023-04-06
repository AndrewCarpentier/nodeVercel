const express = require('express');

const app = express();
const port = 4000;

app.listen(port, ()=>{
    console.log(`API listening on port ${port}`)
});

app.get('/', (req, res)=>{
    res.send('Hey this is my API running 🥳');
});

app.get('/about', (req, res)=>{
    res.send('This is my about route');
});

app.get('/test', (req,res)=>{
    res.send('This is a test 😃');
});

app.get('/user', (req,res)=>{
    res.send(JSON.stringify(
        {
            id: 1,
            pseudo: "john",
            email: "john@gmail.com"
        }
    ));
});

app.post('/post', (req,res)=>{
    res.send(JSON.stringify('POST SUCCESS 🥳'));
});

module.exports = app;