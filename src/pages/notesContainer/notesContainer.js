import {Note} from "../../components/note/note";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Smiles} from "./randomsmiles/smiles";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {getNotes, noteSelector} from "../../store/noteSlice";

export const NoteContainer = () => {
    const dispatch = useDispatch();
    const note = useSelector(noteSelector);
    const [listRef] = useAutoAnimate()

    React.useEffect(() =>
    {
        dispatch(getNotes({
            search: ''
        }))
    }, [])
    return(
        <div className='note-continer' ref={listRef}>
            {note.length !== 0 ?
                note.map((val, i) => (
                    <Note
                        key={note[i].id}
                        note={val}
                    />
                )):
                <div className='smileContent'>
              <Smiles/>
                </div>
            }
        </div>
    )
}
