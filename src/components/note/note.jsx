import './note.scss'
import {addNote, deleteNote} from "../../store/noteSlice";
import {useDispatch} from "react-redux";
import {EditBtn} from "./editbtn";
export const Note = ({note}) => {
  return(
      <div style={{
          background: note.color
      }} className='note' >
          <div className='note-align'>
              <div className='EditBtn'>
           <EditBtn
               id={note.id}
           />
              </div>
          <div className='note-content'>
          <h1>{note.title}</h1>
          <p>{note.text}</p>
          <p className='note-category'>important: {note.category}</p>

          </div>
          </div>
      </div>
  )
}