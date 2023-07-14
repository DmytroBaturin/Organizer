import {createSlice} from "@reduxjs/toolkit";

export const modalState = state => state.modal.open
export const editmodalState = state => state.modal.openEdit

const modalSlice = createSlice({
    name: 'edit',
    initialState: {
        open: false,
        openEdit: false,
    },
    reducers: {
       openEditModal: (state, action) => {
           state.openEdit = action.payload.openEdit
       },
        openModal: (state, action) => {
            state.open = action.payload.open
        }
    }
})

export const {openModal, openEditModal} =  modalSlice.actions
export default modalSlice.reducer