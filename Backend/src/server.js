const app = require('./app');
require('dotenv').config()
require('./database/db');
const port = 4000


app.get('/h', (req, res) =>{
    res.send('hola')
})

app.listen(port, ()=>{console.log('servidor corriendo en el puerto 4000 ')})