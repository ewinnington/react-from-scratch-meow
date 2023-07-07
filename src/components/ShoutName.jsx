import React from 'react';

export default function ShoutName({ name }) {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px' }}>
      {name.toUpperCase()}!
    </div>
  );
}