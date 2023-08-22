import noteStore from '../stores/noteStore';
function CreateNoteForm() {
    // store 
    const store = noteStore();
    return (
        <>
            {!store.noteUpdateFormData._id && <div>
                <h1>Create Note</h1>
                <form >
                    <label htmlFor="title">Note Title</label>
                    <input name="title" value={store.noteFormData.title} onChange={store.setFormData} type="text" />
                    <label htmlFor="body">Note Body</label>
                    <input name="body" value={store.noteFormData.body} onChange={store.setFormData} type="text" />
                    <button onClick={store.createNote} type="submit">Add</button>
                </form>
            </div>}
        </>
    )
}
export default CreateNoteForm;