const express = require('express')
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const person = require('./CRUDRoutes');
app.use(express.json());

require("dotenv").config();

app.use(express.json());
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', person);

const port = process.env.PORT || 3000;
const uri = process.env.DB_URI;

app.listen(port,()=>console.log(`server is lsiteneing on localHost ${port}...`))
mongoose.connect(uri,{

    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=> console.log("MogoDB connection successful..."))
.catch((err)=>console.log("MongoDB connection failed", err.message));