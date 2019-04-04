import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // no token? Redirect to login screen!
    if (!localStorage.getItem("token")) {
      props.history.replace('/');
    }
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3030/api/users', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => {
        setUsers(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

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
