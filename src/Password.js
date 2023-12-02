import React, { useCallback, useEffect, useRef, useState } from 'react'

const Password = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@$%^&*#';

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }



  return (
    <div>
      <div>
        <input type="text" value={password} readOnly placeholder='Password' className='bg-slate-400' ref={passwordRef} />
        <button className='bg-blue-300' onClick={copyPassword}>Copy</button>
      </div>
      <div>
        <input
          type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          name=""
          id="" />
        <label htmlFor="length">Length: {length}</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setnumberAllowed((prev) => !prev)
          }}
          name=""
          id="" />
        <label htmlFor="number">Number</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setcharAllowed((prev) => !prev)
          }}
          name=""
          id="" />
        <label htmlFor="character">Character</label>
      </div>
    </div>
  )
}

export default Password
