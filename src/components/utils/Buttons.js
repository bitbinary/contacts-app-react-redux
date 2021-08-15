//  Different VButton components used for the application
import React from 'react';

//  Circle button with an icon and click functionality defined
export function NewContactBtn({ icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="contacts-addnew-btn flex flex-item-center"
    >
      {icon}
    </div>
  );
}

//  Rounded button with a label and click functionality defined
export function Button({ label, onClick }) {
  return (
    <div className="app-button" onClick={onClick}>
      {label}
    </div>
  );
}
