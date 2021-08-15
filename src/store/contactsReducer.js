import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    users: [],
    newContact: {
      name: '',
      role: '',
    },
  },
  reducers: {
    setContacts: (state, action) => {
      state.users = action.payload;
    },

    newContact: (state, action) => {
      let { key, value } = action.payload;
      state.newContact[key] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setContacts, newContact } = contactsSlice.actions;

export default contactsSlice.reducer;
