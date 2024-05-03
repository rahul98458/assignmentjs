'use client'

import React,{ useState } from 'react'

const page = () => {
    let [num,setNumber] = useState(100)

    const increment=()=>
    {
        setNumber(num + 1)
       
    }

    const decrement=()=>
    {
        setNumber(num - 1)
       
    }

  return (
    <div>
        <button onClick={increment} className='bg-green-200'>+</button>
        {num}
        <button onClick={decrement} className='bg-red-200'>-</button>
    </div>
  )
}

export default page