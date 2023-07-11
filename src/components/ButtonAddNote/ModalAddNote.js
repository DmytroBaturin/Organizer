import addnew from "../../pages/notesContainer/img/addnew.svg";
import React from "react";
import { Modal } from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../store/noteSlice";
import { modalState, openModal } from "../../store/ModalSlice";

export const ModalAddNote = () => {
    const dispatch = useDispatch();
    const open = useSelector(modalState);
    const setOpen = () => {
        dispatch(openModal({
            open: !open
        }));
    };
    const onSubmit = (title, text, category, color) => {
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
            {open && (
                <Modal
                    titleprops="Add new"
                    onSubmit={onSubmit}
                    setOpen={setOpen}
                />
            )}
        </>
    );
};
