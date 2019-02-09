const express = require('express');
const auth = require('./auth');
const path = require('path');
const app = express();
const ENV = process.env.NODE_ENV || 'development';


// if(ENV === 'production'){
//     app.use(auth);
// }

app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

// if(ENV !== 'production'){
//     const PORT = process.env.PORT || 9000;

//     app.listen(PORT, () => { console.log('Dev Server Running at localhost:' + PORT) });
// }

exports.app = app;
