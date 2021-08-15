import React from 'react';
import AddNew from '.';

export default function AddNewModal({
  header = null,
  footer = null,
  cancel,
  children,
}) {
  return (
    <>
      <div
        onClick={cancel}
        name="addnew-bg"
        id="addnew-bg"
        className="contacts-addnew-modal-container flex flex-item-center"
      >
        <div className="contacts-addnew-modal">
          <div className="contacts-addnew-container flex">
            {header}
            <AddNew.Body>{children}</AddNew.Body>
            {footer}
          </div>
        </div>
      </div>
    </>
  );
}
