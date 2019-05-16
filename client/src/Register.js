import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function Register() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const departmentRef = useRef();
  const [ flash, setFlash ] = useState('')

  const submit = () => {
    axios.post('http://localhost:3030/api/register', {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      department: departmentRef.current.value
    })
      .then(res => {
        localStorage.setItem('token', res.data.password)
        setFlash(`Here's your token: ${res.data.password}`)
      })
      .catch(error => {
        setFlash(`Something bad has happened! ${error.desponse.data.message}`)
      })
  }

  return(
    <div>
      <div>
        <br/>REGISTER <br/>
        username <input ref={usernameRef} type="text" /> <br />
        password <input ref={passwordRef} type="text" /> <br/>
        department <input ref={departmentRef} type="text" />
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