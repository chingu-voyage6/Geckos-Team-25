const express = require('express');
const React = require('react');
const path = require('path');
const PORT = 8080;

const app = express();

app.use(express.static(__dirname + '/public'))
console.log(__dirname);
//This is not working.....
app.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, 'index.html'));                               
  });

app.listen(PORT, console.log(`listening on ${PORT}`), console.log(__dirname));

