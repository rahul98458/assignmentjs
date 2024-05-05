'use client'
import React,{useState} from 'react'

const page = () => {
  
let [num,newNum] = useState('')

  const digit = [
    ['7','8','9'],
    ['4','5','6'],
    ['1','2','3'],
    ['0','00','.']
  ]

  const symbol = ['+','-','*','/','=','⌫']

  const generateDigit=()=>
  {
      return digit.map((item)=>{
                  return item.map((val)=>{
                    return <div onClick={() => newNum(num+val)} className='rounded-lg bg-gray-900 m-2 w-10 h-6 text-center text-white'>{val}</div>
                  })
      })
       
  }

  const handleClickSymbol=(symbol)=>{
        
    let lChar =  num.slice(-1)
       

    if(symbol === '=')
     {
      const output = eval(num)
       newNum(output)
     }
     else if(symbol === '⌫')
     {
      let newString = num.slice(0, -1)
      newNum(newString)
    }
    else if('+' === lChar || '-' === lChar || '/' === lChar || '*' === lChar)
      {
       return
     }
    else
      {
      newNum(num+symbol)
      }
  }

  const generateSymbol=()=>
    {
         return  symbol.map((item)=>{
               return  <div  onClick={() =>handleClickSymbol(item)} className='rounded-lg bg-orange-900 m-1 w-10 text-center text-white'>{item}</div>
           })
  }

  

  return (
    <div className='bg-purple-400  m-2'>
      <div className='flex '>
        <div className='justify-center items-center '>
      <div className='display rounded-lg bg-orange-900  m-1 w-10 text-center text-white  '>{num}</div></div></div>
    <div className=' flex'>
      <div className='grid grid-cols-3 w-20% '>
      {generateDigit()}
       <button onClick={() => newNum('')} className='rounded-lg bg-orange-900 m-1 w-10 h-6 mt-2  text-center text-white'>AC</button></div>
   <div className='m-1 '>{generateSymbol()}</div>
   </div>
   </div>
  )
}

export default page