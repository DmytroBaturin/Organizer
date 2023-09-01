import addnew from "../../pages/notesContainer/img/addnew.svg";
import React, {useState} from "react";
import { Modal } from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../store/noteSlice";
import { modalState, openModal } from "../../store/ModalSlice";
import {Inputs} from "../Modal/inputs";
export const ModalAddNote = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [color, setColor] = useState('#FFDAA3')
    const [category, setCategory] = useState('1')
    const dispatch = useDispatch();
    const open = useSelector(modalState);
    const setOpen = () => {
        dispatch(openModal({
            open: !open
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(!title && !text){
            console.log('nono')
        }else {
            dispatch(addNote({
                title,
                text,
                category,
                color
            }));
        }
        setTitle('')
        setText('')
        setCategory('1')
        setColor('#FFDAA3')
    };
    return (
        <>
            <div onClick={setOpen} className="addnew">
                <p>add new</p>
                <img alt="" src={addnew} />
            </div>
            <div className='modal'>
            {open && (
                <Modal
                    titleprops="Add new"
                    onSubmit={(e) => onSubmit(e)}
                    setOpen={setOpen}
                    children={
                    <Inputs
                        value={{title, text, color, category}}
                        setTitle={setTitle}
                        setText={setText}
                        setCategory={setCategory}
                        setColor={setColor}
                    />}
                />

            )}
            </div>
        </>
    );
};
