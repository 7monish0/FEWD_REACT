
import React, { useState } from 'react';

function MouseEventExample() {
  const [message, setMessage] = useState('');

  const handleMouseOver = () => {
    setMessage('Mouse is over the box!');
  };

  const handleMouseOut = () => {
    setMessage('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'lightblue',
          textAlign: 'center',
          lineHeight: '100px',
          fontSize: '18px',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        Hover over me!
      </div>

      <div style={{ marginTop: '20px', fontSize: '16px', color: 'green' }}>
        {message}
      </div>
    </div>
  );
}

export default MouseEventExample;
