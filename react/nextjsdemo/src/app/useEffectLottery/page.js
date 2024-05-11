'use client'
import React, {useEffect, useState} from 'react'

const page = () => {
    const lotteryItems = [
        'Car',
        'X',
        'Bike',
        'X',
        'X',
        'X',
        'TV',
        'X',
        'X',
        'X'
    ]
    const [lotteryId, setLotteryId] = useState(null)
    const [isPause,setPause] = useState(false)
    useEffect(()=>{
        if(!isPause)
            {
             setTimeout(() => {
            let randomNum = Math.ceil(Math.random()*lotteryItems.length-1)
            if (lotteryId===randomNum)
           {
             randomNum=randomNum+1
           }
            setLotteryId(randomNum)
        }, 100);
            }
    },[lotteryId]);

     const timerStop=()=>{
          setPause(true)
     }

  return (
    <div>
         
        {
            lotteryItems.map((item, id)=>{
                return <div style={{backgroundColor: id===lotteryId ? 'red' : null}} className='w-32 shadow-lg m-2 p-2'>{item}</div>
            })
        }
        <button onClick={timerStop}>Pause</button>
    </div>
  )
}

export default page