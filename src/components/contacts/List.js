import React from 'react';
import Contacts from '.';

export default function List({ data }) {
  return (
    <div className="contacts-list">
      {data.map((contact) => (
        <Contacts.Card key={contact.id} data={contact} />
      ))}
    </div>
  );
}
