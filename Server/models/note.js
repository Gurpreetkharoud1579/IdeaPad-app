// import mongoose
const mongoose = require('mongoose');

// schema for note model
const noteSchema = new mongoose.Schema({
    title:String,
    body: String
  });
// created schema in mongo
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;