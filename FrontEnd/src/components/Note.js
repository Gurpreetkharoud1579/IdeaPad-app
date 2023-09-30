import noteStore from "../stores/noteStore"
import '../styles/note.css'

// getting note as props 
export default function Note({ note }) {
    // getting the required functions only not all
    const store = noteStore((store) => {
        return {
            deleteNote: store.deleteNote,
            toggleUpdateForm: store.toggleUpdateForm
        }
    })
  return (
    <div className="note" key={note._id}>
      <h3 className="note-title">{note.title}</h3>
      <p className="note-body">{note.body}</p>
      <button onClick={() => store.deleteNote(note._id)} className="delete-button">
        Delete
      </button>
      <button onClick={() => store.toggleUpdateForm(note)} className="update-button">
        Update
      </button>
      <hr className="divider" />
    </div>
  );

}
