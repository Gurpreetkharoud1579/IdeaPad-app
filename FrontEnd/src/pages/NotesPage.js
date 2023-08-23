import { useEffect} from 'react';
import CreateNoteForm from '../components/CreateNoteForm';
import UpdateNoteForm from '../components/UpdateNoteForm';
import Notes from '../components/Notes';
import noteStore from '../stores/noteStore';
function NotesPage() {
  // store 
  const store = noteStore();

  // fetch all notes once the app is loaded
  useEffect(() => {
    store.fetchNotes();
  }, [])

  return (
    <>
      <Notes/>
      <UpdateNoteForm/>
      <CreateNoteForm/>
    </>
  );
}

export default NotesPage;