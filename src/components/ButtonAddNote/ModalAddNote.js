import addnew from "../../pages/notesContainer/img/addnew.svg";
import React from "react";
import {Modal} from "../Modal";
import {useDispatch, useSelector} from "react-redux";
import {addNote, modalState, openModal} from "../../store/noteSlice";

export const ModalAddNote = () => {
    const dispatch = useDispatch()
    const open = useSelector(modalState)
    const setOpen = () => {
        dispatch(openModal({
            open: !open
        }))
    }
    const onSubmit = (title, text, category) => {
        dispatch(addNote(
            {
                title,
                text,
                category
            }
        ))
    }
    return(
        <>
        <div onClick={setOpen} className='addnew'>
            <p>add new</p>
            <img alt='' src={addnew}/>
        </div>
            {open &&
                <Modal
                    titleprops='Add new'
                    onSubmit={onSubmit}
                    setOpen={setOpen}
            />}
        </>
    )
}