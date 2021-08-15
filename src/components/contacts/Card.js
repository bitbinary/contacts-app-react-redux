import React from 'react';
import { fullName, getRandomColor, getRandomRole } from '../tools';

export default function Card({ data }) {
  const { first_name, last_name, avatar } = data;
  const full_name = fullName(first_name, last_name);
  return (
    <div className="contacts-contact-item">
      <div className="contact-image-holder">
        <img className="contact-avatar" src={avatar} />
        <div
          style={{ backgroundColor: getRandomColor(full_name.length) }}
          className="contact-status"
        ></div>
      </div>
      <div className="contacts-details">
        <p className="contacts-name">{full_name}</p>
        <p className="contacts-title">{getRandomRole(full_name.length)}</p>
      </div>
    </div>
  );
}
