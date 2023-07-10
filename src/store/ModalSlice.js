import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const editNote = createAsyncThunk('notes/editNote', async (payload,{getState}) => {
    const { id } = getState().edit
    console.log(id)
    const res = await fetch(`https://64936b2b428c3d2035d1c0e4.mockapi.io/todo/${id}`, {
        method: 'PUT',
        body: JSON.stringify(
            {
                title: payload.title,
                text: payload.text,
                category: payload.category,
            }
        )
    })
    const data = await res.json();
    return data.notes
})

const editSlice = createSlice({
    name: 'edit',
    initialState: {
        id: '',
        textcontent: '',
    },
    reducers: {
       edit: (state, action) => {
           state.id = action.payload.id;
           state.textcontent = action.payload.textcontent;
       }
    }
})