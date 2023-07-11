import { configureStore } from '@reduxjs/toolkit'
import noteSlice from "./noteSlice";
import authSlice from "./authSlice";
import modalSlice from "./ModalSlice";

export const store = configureStore({
    reducer: {
      notes: noteSlice,
      modal: modalSlice,
      auth: authSlice
    }
})
