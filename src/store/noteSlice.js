import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const noteSelector = state => state.notes.notes;
export const modalState = state => state.notes.open

export const getNotes = createAsyncThunk('notes/getNotes', async (params) => {
    const {search = '', category } = params
    console.log(category)
    const res = await fetch(`https://64936b2b428c3d2035d1c0e4.mockapi.io/todo?title=${search}${category? '&sortBy=category&order=desc': ''}`)
        .then(response => response.json())
    return res
})

export const editNote = createAsyncThunk('notes/editNote', async (payload) => {
    const res = await fetch(`https://64936b2b428c3d2035d1c0e4.mockapi.io/todo/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(
            {
                title: "edited",
                text: "edited",
                category: "edited",
                color: "edited"
            }
        )
    })
    const data = await res.json();
    return data.notes
})


export const addNote = createAsyncThunk('notes/addNote', async (payload) => {
    const res = await fetch('https://64936b2b428c3d2035d1c0e4.mockapi.io/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: payload.title,
            text: payload.text,
            category: payload.category,
            color: payload.color,
        })
    });
    const data = await res.json();
    return data;
});

export const deleteNote = createAsyncThunk('notes/deleteNote', async (payload) => {
      const res = await fetch(`https://64936b2b428c3d2035d1c0e4.mockapi.io/todo/${payload.id}`, {
          method: 'DELETE'
      })
    const data = await res;
    return data.notes;
})
export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        isLoading: false,
        error: null,
        value: '',
        open: false,
        notes: []
    },
    reducers: {
        openModal: (state, action) => {
            state.open = action.payload.open
        }
        },
    extraReducers: (builder) => {
          builder.addCase(getNotes.pending,(state) => {
              state.isLoading = true;
              state.error = null;
              })
              .addCase(getNotes.fulfilled, (state, action) => {
                  state.isLoading = true;
                  state.error = null;
                  state.notes = action.payload;

              })
              .addCase(getNotes.rejected, (state) => {
                  state.isLoading = false;
                  state.error = 'error';
              })
              .addCase(addNote.pending, (state, action) => {
                console.log(action)
          })
              .addCase(addNote.fulfilled, (state, action) => {
                 state.notes.push(action.payload)
              })
              .addCase(deleteNote.fulfilled, (state, action) => {
                  const deletedNoteId = action.meta.arg.id;
                  state.notes = state.notes.filter(note => note.id !== deletedNoteId);
              })
       }
    })
export const {openModal} = noteSlice.actions
export default noteSlice.reducer