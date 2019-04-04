import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function Register() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const departmentRef = useRef();
  const [ flash, setFlash ] = useState('')

  const submit = () => {
    console.log(passwordRef.current.value)
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