const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let apiRouter = require('./routes/api')(express.Router());

mongoose.connect('mongodb://localhost:27017/eStoreDB', { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 })
    .then(res => { console.log('Mongodb has been connected'); })
    .catch(err => { console.log(err) })

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(3000, function () {
    console.log("Server is runing on port 3000");
})

app.use('/api/v1/', apiRouter);
