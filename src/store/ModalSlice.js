import {createSlice} from "@reduxjs/toolkit";

export const modalState = state => state.modal.open

const modalSlice = createSlice({
    name: 'edit',
    initialState: {
        id: '',
        open: false,
        textcontent: '',
    },
    reducers: {
       editModal: (state, action) => {
           state.id = action.payload.id;
           state.textcontent = action.payload.textcontent;
       },
        openModal: (state, action) => {
            state.open = action.payload.open
        }
    }
})

export const {openModal, editModal} =  modalSlice.actions
export default modalSlice.reducer