import React from 'react';

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

export function Button({ label, onClick }) {
  return (
    <div className="app-button" onClick={onClick}>
      {label}
    </div>
  );
}
