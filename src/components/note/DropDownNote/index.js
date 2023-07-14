import './modalNote.scss';
import {useDispatch, useSelector} from "react-redux";
import {deleteNote, editNote, noteSelector} from "../../../store/noteSlice";
import {editmodalState, openEditModal} from "../../../store/ModalSlice";
import {Modal} from "../../Modal";
import {createPortal } from "react-dom"
import {Inputs} from "../../Modal/inputs";
import React, {useState} from "react";

export const DropDownNote = ({id}) => {
    const notes = useSelector(noteSelector);
    const initialState = notes.find(note => note.id === id)
    const open = useSelector(editmodalState)
    const [title, setTitle] = useState(initialState.title)
    const [text, setText] = useState(initialState.text)
    const [color, setColor] = useState(initialState.color)
    const [category, setCategory] = useState(initialState.category)
    const dispatch = useDispatch()
    const HandlEditNote = ()  => {
        dispatch(openEditModal({
            openEdit: !open
        }));
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(editNote({
            id: id,
            title: title,
            text: text,
            category: category,
            color: color
        }));
    };
    return (
        <div style={{
            zIndex: '1'
        }} className='modalNote'>
            <div className='categoryEdit'>
                <p style={{cursor: "pointer"}} onClick={() => {dispatch(deleteNote({id: id}))}}>Delete</p>
                <p style={{cursor: "pointer"}} onClick={HandlEditNote}>Edit</p>
            </div>
            {open && createPortal(
                <Modal
                    titleprops="Edit note"
                    onSubmit={(e) => onSubmit(e)}
                    setOpen={HandlEditNote}
                    children={
                        <Inputs
                            value={{ title, text, color, category }}
                            setTitle={setTitle}
                            setText={setText}
                            setCategory={setCategory}
                            setColor={setColor}
                        />}/>,
                document.querySelector('.modal')
            )}
        </div>
    );
};