'use client'
import { changeColor, changeHeight, changeShape, changeWidth } from '@/redux/reducerSlices/boxSlice'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'



const box = () => {
    const {backgroundColor,width,height,borderRadius} = useSelector(state=>state.box)
    const dispatch = useDispatch()
    
    const generateArea = () =>
      {
        if (borderRadius==='50%')
        {
            return Math.PI * (width/2) ** 2
        }
        else
        {
            return width * height
        }
      }
    
  return (
    <div>
    <div style={{backgroundColor:backgroundColor , height:height , width : width,borderRadius:borderRadius}}> 
    </div>
      <Button onClick={()=>dispatch(changeWidth())}>+width</Button>
       <Button onClick={()=>dispatch(changeHeight())}>+height</Button>
       <Button onClick={()=>dispatch(changeShape())}>change shape</Button>
       <Input placeholder='enter the new color' onChange={(e)=> dispatch(changeColor(e.target.value))}/>
        {generateArea()}
    </div>
  
  )
}

export default box