import React, { useState, useRef } from 'react'

// a ref is an explicit reference on a DOM element

export const Input = () => {
  // const [name, setName] = useState<string | null>('');
  const [name, setName] = useState('');

  // !null means Read Only
  const ref = useRef<HTMLInputElement>(null);

  console.log(ref?.current?.value);


  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value) } />
  )
}
