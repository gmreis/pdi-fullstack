const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    })
    .use(router);

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});