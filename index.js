const express = require('express');
const auth = require('./auth');
const path = require('path');
const app = express();

app.use(auth);
app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

exports.app = app;