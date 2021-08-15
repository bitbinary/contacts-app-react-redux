import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';

export default configureStore({
  reducer: { contacts: contactsReducer },
});
