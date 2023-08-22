import noteStore from '../stores/noteStore';
function Note() {
    // store 
    const store = noteStore();
    return (
        <>
            <div><h1>My notes</h1></div>
            {
                store.notes && store.notes.map((note) => {
                    return (
                        <div key={note._id}>
                            <h3> {note.title} </h3>
                            <h3> {note.body} </h3>
                            <button onClick={() => store.deleteNote(note._id)}>Delete</button>
                            <button onClick={() => store.toggleUpdateForm(note)}>Update</button>
                            <h3>-------------------------------</h3>
                        </div >
                    )
                })
            }
        </>
    )
}
export default Note;