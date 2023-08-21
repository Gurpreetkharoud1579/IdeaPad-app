import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  // all states
  const [notes, setNotes] = useState(null);
  const [noteFormData, setNoteFormData] = useState({ title: '', body: '' });
  const [noteUpdateFormData, setNoteUpdateFormData] = useState({
    title: '',
    body: '',
    _id: null
  });

  // fetch all notes once the app is loaded
  useEffect(() => {
    fetchNotes();
  }, [])

  // funtions
  const fetchNotes = async () => {
    // get notes from api
    try {
      const response = await axios.get('http://localhost:3000/notes');
      const notes = response.data.notes;
      setNotes(notes);
    } catch (error) {
      console.error('Error fetching the data'.error);
    }
  }

  const setFormData = (e) => {
    const { name, value } = e.target;
    setNoteFormData({
      ...noteFormData,
      [name]: value
    });
  }

  const createNote = async (e) => {
    e.preventDefault();
    try {
      // create new note
      const res = await axios.post('http://localhost:3000/notes', noteFormData);
      // clear form fields
      setNoteFormData({
        title: '',
        body: ''
      });
      // set notes with addition of new note
      setNotes([...notes, res.data.note]);
    } catch (error) {
      alert('Error Creating note');
      console.log('Error creating new note', error);
    }
  }
  const deleteNote = async (id) => {
    try {
      // delete the note
      await axios.delete(`http://localhost:3000/notes/${id}`);
      // update state
      setNotes(notes.filter((note) => { return note._id !== id }));
    } catch (error) {
      alert('Error deleting note');
      console.log('Error deleting note', error);
    }

  }
  // handle onClick update button to set initial values of update form 
  const setUpdateForm = (note) => {
    // set update Form data state
    setNoteUpdateFormData({ title: note.title, body: note.body, _id: note._id });
  }
  //handle changes in update form and setupdateForm state 
  const setUpdateFormData = (e) => {
    const { name, value } = e.target;
    setNoteUpdateFormData({ ...noteUpdateFormData, [name]: value });
  }
  // update note 
  const updateNote = async (e) => {
    e.preventDefault();
    const { title, _id, body } = noteUpdateFormData;
    try {
      // update note 
      await axios.put(`http://localhost:3000/notes/${_id}`, { title: title, body: body });

      // update state
      const newNotes = [...notes];
      const noteIndex = notes.findIndex((note) => { return note._id === _id });
      newNotes[noteIndex] = noteUpdateFormData;
      setNotes(newNotes);
      // clear update form fields
      resetNoteUpdateFormData();

    } catch (error) {

    }
  }
  const canceUpdateNote = () => {
    resetNoteUpdateFormData();
  }
  const resetNoteUpdateFormData = () => {
    setNoteUpdateFormData({ title: '', body: '', _id: null });
  }

  return (
    <>
      <div><h1>My notes</h1></div>
      {notes && notes.map((note) => {
        return (
          <div key={note._id}>
            <h3> {note.title} </h3>
            <h3> {note.body} </h3>
            <button onClick={() => deleteNote(note._id)}>Delete</button>
            <button onClick={() => setUpdateForm(note)}>Update</button>
            <h3>-------------------------------</h3>
          </div >
        )
      })}
      {noteUpdateFormData._id &&
        <div>
          <h1>Update Note</h1>
          <form >
            <label htmlFor="title">Note Title</label>
            <input name="title" value={noteUpdateFormData.title} onChange={setUpdateFormData} type="text" />
            <label htmlFor="body">Note Body</label>
            <input name="body" value={noteUpdateFormData.body} onChange={setUpdateFormData} type="text" />
            <button onClick={updateNote} type="submit">Update</button>
            <button onClick={canceUpdateNote} type="submit">Cancel</button>
          </form>
        </div>
      }
      {!noteUpdateFormData._id && <div>
        <h1>Create Note</h1>
        <form >
          <label htmlFor="title">Note Title</label>
          <input name="title" value={noteFormData.title} onChange={setFormData} type="text" />
          <label htmlFor="body">Note Body</label>
          <input name="body" value={noteFormData.body} onChange={setFormData} type="text" />
          <button onClick={createNote} type="submit">Add</button>
        </form>
      </div>}
    </>
  );
}

export default App;
