const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

//Creates the actual item
const app = express();

//cors setup. it sets up headers to allow cors from anything
app.use(cors());

//Create an endpoint. Always do /api/ for API style, authorization do /auth/
app.get('/api/get-stuff', (req, res) => {
    res.send({success: true, message: 'Here is some stuff from the back-end'})
})

//Request comes before response
app.get('/', (req, res) => {
    res.send('<h1>The Server</h1>');
});

//Tell server to listen on specific port
app.listen(PORT, ()=>{
    console.log('The server is running on PORT 9000')
})