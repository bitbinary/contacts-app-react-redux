import React from 'react';
import { fullName } from '../tools';

export default function ContactItem({ data }) {
  console.log(data);
  const { first_name, last_name, avatar } = data;
  const full_name = fullName(first_name, last_name);
  return (
    <div className="contacts-contact-item">
      <div>
        <img className="contact-avatar" src={avatar} />
      </div>
      <div className="contacts-details">
        <p className="contacts-name">{full_name}</p>
        <p className="contacts-title">{'Manager'}</p>
      </div>
    </div>
  );
}
