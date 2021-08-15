import React from 'react';
import Contacts from '.';

export default function Container({ header = null, children, extras }) {
  return (
    <div className="contacts-container flex">
      {header}
      <Contacts.Body>{children}</Contacts.Body>
      {extras}
    </div>
  );
}
