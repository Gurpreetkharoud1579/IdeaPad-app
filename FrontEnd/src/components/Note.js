import noteStore from "../stores/noteStore"

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
        <div key={note._id}>
            <h3> {note.title} </h3>
            <h3> {note.body} </h3>
            <button onClick={() => store.deleteNote(note._id)}>Delete</button>
            <button onClick={() => store.toggleUpdateForm(note)}>Update</button>
            <h3>-------------------------------</h3>
        </div >
    )
}
