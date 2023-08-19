// load local variables
if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
// import dependencies
const express = require('express');

// app using express
const app = express();

// configure express
app.use(express.json());

// Routing 
app.get('/', (req,res ) => {
    res.json({hello: "hello from server"});
});

// app listening on port
app.listen(process.env.PORT);