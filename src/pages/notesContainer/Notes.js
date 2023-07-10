import './notesContainer.scss';
import { Filters } from "./filtersDropDown/filters";
import React from "react";
import { ModalAddNote } from "../../components/ButtonAddNote/ModalAddNote";
import { NoteContainer } from "./notesContainer";
import {UserPage} from "../user";

export const Notes = () => {
    return (
        <div className='main-container'>
            <div className='main-navbar'>
                <ModalAddNote />
                <Filters />
            </div>
                <NoteContainer />
        </div>
    );
};
