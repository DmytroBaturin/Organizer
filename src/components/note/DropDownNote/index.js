import './modalNote.scss';
import {useDispatch, useSelector} from "react-redux";
import {deleteNote, editNote} from "../../../store/noteSlice";
import {editmodalState, openEditModal} from "../../../store/ModalSlice";
import {Modal} from "../../Modal";
import {createPortal } from "react-dom"
import {Inputs} from "../../Modal/inputs";
import React, {useState} from "react";

export const DropDownNote = ({id,myRef}) => {
    const open = useSelector(editmodalState)
    const [title, setTitle] = useState('Title')
    const [text, setText] = useState('Text')
    const [color, setColor] = useState('#FFDAA3')
    const [category, setCategory] = useState('1')
    const dispatch = useDispatch()

    const HandlEditNote = ()  => {
        dispatch(openEditModal({
            openEdit: !open
        }));
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(text, title)
        dispatch(editNote({
            id: id,
            title: title,
            text: text,
            category: category,
            color: color
        }));
    };

    return (
        <div ref={myRef} style={{
            zIndex: '1'
        }} className='modalNote' >
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