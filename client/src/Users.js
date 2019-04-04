import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users(props) {
  const [users, setUsers] = useState([]);

  return (
    <div className='users'>
      {[].map(u => (
        <li key={u.id}>
          {u.username}
        </li>
      ))}
    </div>
  );
}
