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

module.exports = app;