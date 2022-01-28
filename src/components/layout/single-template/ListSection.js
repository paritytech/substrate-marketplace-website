import React from 'react';

export default function ListSection({ title, children }) {
  return (
    <div className="mb-4">
      <div className="font-bold mb-3">{title}</div>
      {children}
    </div>
  );
}
