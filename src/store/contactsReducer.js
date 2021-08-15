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
    // Sets the users list
    setContacts: (state, action) => {
      state.users = action.payload;
    },
    // Updates the new contact details
    newContact: (state, action) => {
      let { key, value } = action.payload;
      state.newContact[key] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setContacts, newContact } = contactsSlice.actions;

export default contactsSlice.reducer;
