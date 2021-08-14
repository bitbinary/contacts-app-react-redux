import React from 'react';
import Contacts from '.';

export default function Container({ header = null, children, extras }) {
  return (
    <div className="contacts-container flex">
      <Contacts.Header>{header}</Contacts.Header>
      <Contacts.Body>{children}</Contacts.Body>
      {extras}
    </div>
  );
}
