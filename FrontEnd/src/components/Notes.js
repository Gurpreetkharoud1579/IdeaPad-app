import noteStore from '../stores/noteStore';
import Note from './Note';
function Notes() {
    // store 
    const store = noteStore();
    return (
        <>
            <div><h1>My notes</h1></div>
            {
                store.notes && store.notes.map((note) => {
                    return (
                        <Note key={note._id} note={note} />
                    )
                })
            }
        </>
    )
}
export default Notes;