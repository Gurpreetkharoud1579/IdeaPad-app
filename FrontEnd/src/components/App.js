import { useEffect} from 'react';
import noteStore from '../stores/noteStore';
import Note from './Note';
import CreateNoteForm from './CreateNoteForm';
import UpdateNoteForm from './UpdateNoteForm';
function App() {
  // store 
  const store = noteStore();

  // fetch all notes once the app is loaded
  useEffect(() => {
    store.fetchNotes();
  }, [store])

  return (
    <>
      <Note/>
      <UpdateNoteForm/>
      <CreateNoteForm/>
    </>
  );
}

export default App;
