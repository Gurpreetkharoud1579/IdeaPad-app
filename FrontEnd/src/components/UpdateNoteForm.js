import noteStore from '../stores/noteStore';
import '../styles/updateNoteForm.css'
function UpdateNoteForm() {
    // store 
    const store = noteStore();
  return (
    <>
      {store.noteUpdateFormData._id && (
        <div className="update-note-form-container">
          <h1>Update Note</h1>
          <form>
            <label htmlFor="title">Note Title</label>
            <input
              name="title"
              value={store.noteUpdateFormData.title}
              onChange={store.setUpdateFormData}
              type="text"
            />
            <label htmlFor="body">Note Body</label>
            <input
              name="body"
              value={store.noteUpdateFormData.body}
              onChange={store.setUpdateFormData}
              type="text"
            />
            <button onClick={store.updateNote} type="submit">
              Update
            </button>
            <button onClick={store.cancelUpdateNote} type="submit">
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );

}
export default UpdateNoteForm;