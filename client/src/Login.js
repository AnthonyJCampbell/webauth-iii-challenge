import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [ flash, setFlash ] = useState('')

  const submit = () => {
    axios.post('http://localhost:3030/api/login', {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
      .then(res => {
        localStorage.setItem('token', res.data.token)
        setFlash(`Here's your token: ${res.data.token}`)
      })
      .catch(error => {
        setFlash(`Something bad has happened! ${error.desponse.data.message}`)
      })
  }

  return(
    <div>
      <div>
        username <input ref={usernameRef} type="text" /> <br />
        password <input ref={passwordRef} type="text" />
      </div>

      <div>
        <button onClick={submit}>
          Submit
        </button>

        <div className='flash'>{flash}</div>
      </div>
    </div>
  )
}