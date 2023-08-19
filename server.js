// load local variables
if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
// import dependencies
const express = require('express');
const cors = require('cors');
const connectToDB = require('./config/dbConfig');
const  {fetchNotes, fetchNoteById, createNote ,updateNote ,deleteNote } = require('./controllers/noteController');


// app using express
const app = express();

// configure express
// by default express dont understand json so used this
app.use(express.json());
// to enable request from other origin i.e. otherthan this port
app.use(cors());

// connect to database
connectToDB();

// Routing 
// get all notes
app.get('/notes', fetchNotes );
// get the specific note
app.get('/notes/:id' , fetchNoteById );
// create a new note
app.post('/notes' ,createNote);
// update note
app.put('/notes/:id', updateNote);
// delete specific note
app.delete('/notes/:id', deleteNote);


// Start our sever at a specific port
app.listen(process.env.PORT);