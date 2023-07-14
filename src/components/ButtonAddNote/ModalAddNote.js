import addnew from "../../pages/notesContainer/img/addnew.svg";
import React, {useState} from "react";
import { Modal } from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../store/noteSlice";
import { modalState, openModal } from "../../store/ModalSlice";
import {Inputs} from "../Modal/inputs";
export const ModalAddNote = () => {
    const [title, setTitle] = useState('Title')
    const [text, setText] = useState('Text')
    const [color, setColor] = useState('#FFDAA3')
    const [category, setCategory] = useState('1')

    const dispatch = useDispatch();
    const open = useSelector(modalState);
    console.log(open);
    const setOpen = () => {
        dispatch(openModal({
            open: !open
        }));
    };
    const onSubmit = () => {
        dispatch(addNote({
            title,
            text,
            category,
            color
        }));
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
                    onSubmit={onSubmit}
                    setOpen={setOpen}
                    children={
                    <Inputs
                        value={{category: 1}}
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
