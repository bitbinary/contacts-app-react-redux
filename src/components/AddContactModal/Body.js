import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newContact } from '../../store/contactsReducer';

export default function Body({ children }) {
  const {
    newContact: { name, role },
  } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  return (
    <div className="contacts-addnew-body flex-fill">
      <form className="contacts-addnew-form flex">
        <div className="flex form-input-wrapper" key="name">
          <label className="form-input-label" htmlFor="fullname">
            Full name
          </label>
          <input
            key="name"
            value={name}
            onChange={(e) =>
              dispatch(newContact({ key: 'name', value: e.target.value }))
            }
            name="fullname"
            className="form-input"
            type="text"
          />
        </div>
        <div className="flex form-input-wrapper" key="role">
          <label className="form-input-label" htmlFor="role">
            Role
          </label>
          <input
            onChange={(e) =>
              dispatch(newContact({ key: 'role', value: e.target.value }))
            }
            value={role}
            name="role"
            className="form-input"
            type="text"
          />
        </div>
      </form>
    </div>
  );
}
