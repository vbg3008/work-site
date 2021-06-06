const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('./dist/codders-club'));

app.get('/*' , (req , res) => 
    res.sendFile('index.html' , {root:'dist/codders-club/'}),
    );


app.listen(process.env.PORT || 8080);