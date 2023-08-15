const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// middelwares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


// routes 
app.use('/api/tareas',require('./routes/tareas'));

module.exports= app
